FROM node:latest

WORKDIR /app
ENV PATH /app/node_modules/.bin:/usr/local/bin/npm:$PATH

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 3000
CMD ["bash", "entrypoint.sh"]

