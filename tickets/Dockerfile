FROM node:alpine

WORKDIR /app

COPY package.json .
COPY . .
RUN npm install -only=prod

CMD ["npm", "run", "start"]