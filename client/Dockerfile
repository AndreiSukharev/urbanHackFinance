FROM node:10.15.3-alpine
WORKDIR /usr/src/client
COPY package*.json ./
RUN npm install
COPY . /usr/src/client
CMD [ "npm", "run","serve" ]