# Node 18 (Debian/Ubuntu 계열)
FROM node:18

# Puppeteer + Sharp 관련 의존성 설치 (apt-get 사용 가능)
RUN apt-get update && apt-get install -y \
    chromium \
    ca-certificates \
    fonts-liberation \
    libappindicator3-1 \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libdrm-dev \
    libgbm-dev \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    lsb-release \
    xdg-utils \
    wget \
    libvips \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# package.json, package-lock.json 철자 수정
COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
