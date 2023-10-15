FROM node:18

WORKDIR /

COPY . .

RUN npm install
CMD ["node", "/index.js"]
EXPOSE 8080