FROM node:latest

RUN apt update -y && apt upgrade -y

RUN npm i -g npm@latest && curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /workspace
COPY . .


