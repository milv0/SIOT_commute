

FROM node:18.17.0-alpine
WORKDIR /SIOT_commute/siot
COPY package.json package-lock.json ./
RUN npm config set registry https://registry.yarnpkg.com/
COPY . ./
EXPOSE 3000