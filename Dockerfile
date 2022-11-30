FROM node:16

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install --silent --only=production

COPY ./dist .

USER node