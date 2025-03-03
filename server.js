const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");
const sharp = require("sharp");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(bodyParser.json()); // ✅ JSON 데이터 파싱 추가

app.post("/capture", async (req, res) => {
    const userSettings = req.body; // ✅ 사용자 설정값 받기

    try {
        const browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
                headless: "new",
                executablePath: "/usr/bin/google-chrome-stable"
            });
        const page = await browser.newPage();

        // ✅ Puppeteer에서 배경을 명확하게 설정하여 색상 차이 최소화
        await page.evaluate(() => {
            document.body.style.backgroundColor = "#e0e5ec";
        });

        // ✅ 고해상도 설정
        await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 4 });

        await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });

        // ✅ 사용자 설정값을 페이지에 적용 (반 선택 및 과목 반영)
        await page.evaluate((settings) => {
            document.getElementById("classSelect").value = settings.classSelect;
            document.getElementById("classSelect").dispatchEvent(new Event("change")); // ✅ 반 변경 트리거

            // ✅ 선택과목 적용
            const electiveIds = ["K선택", "L선택", "M선택", "N선택", "I선택", "H선택", "J선택", "언어선택", "사문생과선택"];
            electiveIds.forEach(id => {
                if (settings[id]) {
                    document.getElementById(id).value = settings[id];
                    document.getElementById(id).dispatchEvent(new Event("change")); // ✅ 선택과목 변경 트리거
                }
            });

            // ✅ 시간표 강제 업데이트 실행
            if (typeof createTimetable === "function") {
                createTimetable(settings.classSelect);
            }
        }, userSettings);

        // ✅ Puppeteer가 반영된 값을 인식하도록 대기 (DOM 업데이트 대기)
        await new Promise(r => setTimeout(r, 1000)); // ✅ 시간표 변경 후 1초 대기

        // ✅ 캡처할 요소 선택
        const element = await page.$("#timetable");
        if (!element) throw new Error("시간표 컨테이너를 찾을 수 없습니다.");

        const screenshotPath = path.join(__dirname, "public", "timetable_temp.png");
        const finalImagePath = path.join(__dirname, "public", "timetable_highres.png"); // ✅ 경로 선언

        // ✅ 시간표 캡처
        await element.screenshot({
            path: screenshotPath,
            type: "png",
            omitBackground: false, // 배경 유지
        });

        // ✅ 위아래 여백 추가 및 배경색을 동일하게 설정
        const paddingSize = 1000;
        await sharp(screenshotPath)
            .extend({
                top: paddingSize,
                bottom: paddingSize,
                left: paddingSize,
                right: paddingSize,
                background: { r: 224, g: 229, b: 236 } // ✅ 배경색 #e0e5ec 유지
            })
            .toFile(finalImagePath);

        await browser.close();
        res.download(finalImagePath);
    } catch (error) {
        console.error("이미지 저장 오류:", error);
        res.status(500).send("이미지 생성 실패");
    }
});

app.listen(PORT, () => {
    console.log(`서버 실행: http://localhost:${PORT}`);
});
