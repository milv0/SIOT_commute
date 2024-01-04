
# FROM node:18.17.0-alpine
# WORKDIR /SIOT_commute/siot
# COPY package.json package-lock.json ./
# RUN npm config set registry https://registry.yarnpkg.com/
# COPY . ./
# EXPOSE 3000

# 이미지의 기본이 되는 Node.js Alpine 이미지 사용
# FROM node:18.17.0-alpine

# # 작업 디렉토리 설정
# WORKDIR /SIOT_commute/siot

# # 패키지 파일들을 복사해서 먼저 의존성 설치를 진행
# COPY package.json package-lock.json ./

# # Yarn 레지스트리 설정
# # RUN npm config set registry https://registry.yarnpkg.com/

# # 의존성 설치
# RUN npm install

# # 애플리케이션 코드 복사
# COPY . .

# # 포트 3000을 외부에 노출
# EXPOSE 3000

# # 애플리케이션 실행
# CMD ["npm", "start"]

FROM node:18.17.0-alpine

# 작업 디렉토리 설정
WORKDIR /SIOT_commute/siot

# 패키지 파일들을 복사해서 먼저 의존성 설치를 진행
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install

# nodemon 설치
RUN npm install -g nodemon

# 애플리케이션 코드 복사
COPY . .

# 포트 3000을 외부에 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["nodemon", "server.js"]
