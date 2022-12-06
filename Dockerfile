FROM node:14
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 9005
CMD ["node", "app.js"]