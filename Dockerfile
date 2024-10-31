FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]

EXPOSE 3000
