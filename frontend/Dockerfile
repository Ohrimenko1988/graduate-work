FROM node:10.13-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app 
EXPOSE 3000
CMD npm run start
