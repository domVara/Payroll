FROM node:8.11.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install cors
COPY . .
EXPOSE 5000
CMD ["npm", "run", "server"]
