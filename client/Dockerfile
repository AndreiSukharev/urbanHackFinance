FROM node:12.13.1-alpine3.9
WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . /usr/src/client
CMD [ "npm", "run","serve" ]