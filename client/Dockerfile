FROM node:8.11.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install install try-thread-sleep
RUN npm install
RUN npm install react-bootstrap-validation
RUN npm install react-twitter-widgets
RUN npm install auth0-js
RUN npm install react-button-component
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
