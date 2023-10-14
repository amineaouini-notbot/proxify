FROM node

WORKDIR /

COPY . .

RUN npm install
CMD ["node", "/index.js"]
EXPOSE 8080