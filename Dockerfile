FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY deck.mdx _config.yml package.json package-lock.json ./
COPY nomnoml-src ./nomnoml-src

RUN npm install

CMD npm run startd
