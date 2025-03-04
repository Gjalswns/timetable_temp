// 반별 시간표 데이터 (1반부터 4반까지 제공된 시간표 반영)
const classTimetables = {
    1: [
        ["1교시", "생명1", "체육 실기 기초", "영어 I", "체육 실기 기초", "육상"],
        ["2교시", "스포츠 개론", "체육 실기 기초", "단체 운동", "체육 실기 기초", "문학"],
        ["3교시", "영어 I", "운동과 건강", "육상", "영어 I", "스포츠 개론"],
        ["4교시", "생활과 윤리", "진로", "육상", "스어 I", "생명1"],
        ["5교시", "수학 I", "스포츠 개론", "", "생활과 윤리", "스어 I"],
        ["6교시", "문학", "문학", "창체", "수학 I", "창체"],
        ["7교시", "운동과 건강", "수학 I", "🏠", "단체 운동", "창체"]
    ],
    2: [
        ["1교시", "매미T", "문학", "스어 I", "미전T", "영어 I"],
        ["2교시", "매미T", "진로", "수학 I", "미전T", "수학 I"],
        ["3교시", "매미T", "생명1", "생활과 윤리", "미전T", "운동과 건강"],
        ["4교시", "드잉", "스어 I", "영어 I", "미전", "생활과 윤리"],
        ["5교시", "문학", "수학 I", "", "드잉T", "문학"],
        ["6교시", "영어 I", "운동과 건강", "창체", "드잉T", "창체"],
        ["7교시", "생명1", "생활과 윤리", "🏠", "드잉", "창체"]
    ],
    3: [
        ["1교시", "수학 I", "생과", "한문", "운동과 건강", "2I"],
        ["2교시", "2K", "문학", "2H", "문학", "영어 I"],
        ["3교시", "2J", "2J", "영어 I", "2I", "수학 I"],
        ["4교시", "문학", "한문", "수학 I", "수학 I", "운동과 건강"],
        ["5교시", "생과", "2K", "", "영어 I", "문학"],
        ["6교시", "진로", "2I", "창체", "2H", "창체"],
        ["7교시", "2H", "영어 I", "🏠", "2J", "창체"]
    ],
    4: [
        ["1교시", "영어 I", "영어 I", "중어 I", "2L", "2I"],
        ["2교시", "운동과 건강", "진로", "2H", "수학 I", "수학 I"],
        ["3교시", "2J", "2J", "생과", "2I", "문학"],
        ["4교시", "생과", "중어 I", "운동과 건강", "영어 I", "2L"],
        ["5교시", "문학", "수학 I", "", "문학", "영어 I"],
        ["6교시", "수학 I", "2I", "창체", "2H", "창체"],
        ["7교시", "2H", "문학", "🏠", "2J", "창체"]
    ],
    5: [
        ["1교시", "운동과 건강", "운동과 건강", "영어 I", "2L", "2I"],
        ["2교시", "진로", "수학 I", "2H", "영어 I", "생과"],
        ["3교시", "2J", "2J", "수학 I", "2I", "문학"],
        ["4교시", "영어 I", "영어 I", "문학", "중어 I", "2L"],
        ["5교시", "수학 I", "문학", "", "수학 I", "중어 I"],
        ["6교시", "문학", "2I", "창체", "2H ", "창체"],
        ["7교시", "2H", "생과", "🏠", "2J ", "창체"]
    ],
    6: [
        ["1교시", "문학", "수학 I", "사탐", "수학 I", "2I"],
        ["2교시", "2K", "스어 I", "2H", "영어 I", "스어 I"],
        ["3교시", "2J", "2J", "영어 I", "2I", "영어 I"],
        ["4교시", "수학 I", "문학", "문학", "문학", "사탐"],
        ["5교시", "진로", "2K", "", "운동과 건강", "수학 I"],
        ["6교시", "영어 I", "2I", "창체", "2H", "창체"],
        ["7교시", "2H", "운동과 건강", "🏠", "2J", "창체"]
    ],
    7: [
        ["1교시", "스어 I", "수학 I", "문학", "영어 I", "2I"],
        ["2교시", "문학", "2M", "2H", "스어 I", "사탐"],
        ["3교시", "2J", "2J", "운동과 건강", "2I", "2M"],
        ["4교시", "수학 I", "문학", "영어 I", "수학 I", "진로"],
        ["5교시", "영어 I", "영어 I", "", "문학", "수학 I"],
        ["6교시", "운동과 건강", "2I", "창체", "2H ", "창체"],
        ["7교시", "2H", "사탐", "🏠", "2J ", "창체"]
    ],
    8: [
        ["1교시", "영어 I", "사탐", "영어 I", "2L", "2I"],
        ["2교시", "창진", "문학", "2H", "수학 I", "문학"],
        ["3교시", "2J", "2J", "수학 I", "2I", "영어 I"],
        ["4교시", "문학", "수학 I", "스어 I", "문학", "2L"],
        ["5교시", "사탐", "운동과 건강", "", "스어 I", "운동과 건강"],
        ["6교시", "수학 I", "2I", "창체", "2H ", "창체"],
        ["7교시", "2H", "영어 I", "🏠", "2J ", "창체"]
    ],
    9: [
        ["1교시", "수학 I", "영어 I", "생과", "스어 I", "2I"],
        ["2교시", "진로", "2M", "2H", "영어 I", "수학 I"],
        ["3교시", "2J", "2J", "문학", "2I", "2M"],
        ["4교시", "운동과 건강", "운동과 건강", "영어 I", "문학", "생과"],
        ["5교시", "문학", "수학 I", "", "수학 I", "영어 I"],
        ["6교시", "스어 I", "2I", "창체", "2H ", "창체"],
        ["7교시", "2H", "문학", "🏠", "2J ", "창체"]
    ],
    10: [
        ["1교시", "문학", "문학", "운동과 건강", "사탐", "2I"],
        ["2교시", "수학 I", "진로", "2H", "문학", "문학"],
        ["3교시", "2J", "2J", "스어 I", "2I", "수학 I"],
        ["4교시", "스어 I", "영어 I", "수학 I", "영어 I", "영어 I"],
        ["5교시", "운동과 건강", "사탐", "", "2N", "2N"],
        ["6교시", "영어 I", "2I", "창체", "2H", "창체"],
        ["7교시", "2H", "수학 I", "🏠", "2J", "창체"]
    ],
    11: [
        ["1교시", "수학 I", "수학 I", "영어 I", "생과", "2I"],
        ["2교시", "영어 I", "문학", "2H", "수학 I", "운동과 건강"],
        ["3교시", "2J", "2J", "수학 I", "2I", "문학"],
        ["4교시", "문학", "영어 I", "문학", "운동과 건강", "영어 I"],
        ["5교시", "스어 I", "생과", "", "2N", "2N"],
        ["6교시", "진로", "2I", "창체", "2H ", "창체"],
        ["7교시", "2H", "스어 I", "🏠", "2J ", "창체"]
    ],
    12: [
        ["1교시", "영어 I", "스어 I", "문학", "진로", "2I"],
        ["2교시", "기하", "운동과 건강", "2H", "운동과 건강", "영어 I"],
        ["3교시", "2J", "2J", "사탐", "2I", "스어 I"],
        ["4교시", "사탐", "수학 I", "수학 I", "수학 I", "문학"],
        ["5교시", "수학 I", "문학", "", "영어 I", "기하"],
        ["6교시", "문학", "2I", "창체", "2H ", "창체"],
        ["7교시", "2H", "영어 I", "🏠", "2J ", "창체"]
    ],
};

//##################################################################


// 색상 매핑 (선택과목 그룹별 색상)
const colors = {
    "수학 I": "#FFCCCC", "생과": "#CCE5FF", "한문": "#FFFFCC", "운동과 건강": "#CCFFCC",
    "문학": "#FFCCFF", "영어 I": "#FFCC99", "창체": "#CCCCFF", "진로": "#D1D1E0",
    "없음": "#FFFFFF",
    "I선택": "#FF9999",  // I선택 그룹 기본 색상
    "K선택": "#99CCFF",  // K선택 그룹 기본 색상
    "H선택": "#FFCC66",  // H선택 그룹 기본 색상
    "J선택": "#99FF99",  // J선택 그룹 기본 색상
    "L선택": "#CC99FF",  // L선택 그룹 기본 색상
    "M선택": "#FF9966",  // M선택 그룹 기본 색상
    "N선택": "#99CC99",  // N선택 그룹 기본 색상
    "기하": "#99CC99",
    "언어": "#FFCC99",   // 언어 그룹 기본 색상
    "사문/생과": "#CCCCFF" // 사문/생과 그룹 기본 색상

    
};

// 시간표 생성 함수
function createTimetable(classNumber) {
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ""; // 기존 시간표 초기화

    const timetable = classTimetables[classNumber];
    if (!timetable) return;

    timetable.forEach((row) => {
        const tr = document.createElement("tr");
        row.forEach((cell, colIndex) => {
            const td = document.createElement("td");
            if (colIndex === 0) { 
                td.textContent = cell;
            } else if (cell.startsWith("2")) { 
                const electiveType = cell[1] + "선택"; 
                const selectedValue = document.getElementById(electiveType).value;
                td.textContent = selectedValue === "없음" ? "" : selectedValue;
                td.style.backgroundColor = colors[electiveType];
            } else if (cell === "스어 I" || cell === "중어 I" || cell === "한문") { 
                const selectedValue = document.getElementById("언어선택").value;
                td.textContent = selectedValue;
                td.style.backgroundColor = colors["언어"];
            } else if (cell === "생과" || cell === "사탐") { 
                const selectedValue = document.getElementById("사문생과선택").value;
                td.textContent = selectedValue;
                td.style.backgroundColor = colors["사문/생과"];
            } else { 
                td.textContent = cell;
                td.style.backgroundColor = colors[cell] || "#e0e5ec";
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
}

// ✅ **반 선택 변경 이벤트 리스너**
document.getElementById("classSelect").addEventListener("change", (e) => {
    createTimetable(e.target.value);
});

// ✅ **선택과목 변경 이벤트 리스너**
document.querySelectorAll("#electiveMenu select").forEach(select => {
    select.addEventListener("change", () => {
        createTimetable(document.getElementById("classSelect").value);
    });
});

// ✅ **다운로드 버튼 클릭 이벤트 (선택과목 반영)**
document.getElementById("downloadBtn").addEventListener("click", async () => {
    const userSettings = {
        classSelect: document.getElementById("classSelect").value,
        K선택: document.getElementById("K선택").value,
        L선택: document.getElementById("L선택").value,
        M선택: document.getElementById("M선택").value,
        N선택: document.getElementById("N선택").value,
        I선택: document.getElementById("I선택").value,
        H선택: document.getElementById("H선택").value,
        J선택: document.getElementById("J선택").value,
        언어선택: document.getElementById("언어선택").value,
        사문생과선택: document.getElementById("사문생과선택").value
    };

    try {
        const response = await fetch("/capture", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userSettings)
        });

        if (!response.ok) throw new Error("이미지 다운로드 실패");

        const blob = await response.blob();
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "timetable_highres.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("다운로드 오류:", error);
        alert("이미지를 저장하는 중 오류가 발생했습니다.");
    }
});

// ✅ **초기 1반 시간표 생성**
window.onload = () => {
    createTimetable(1);
};