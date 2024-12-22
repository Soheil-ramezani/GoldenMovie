# build stage
FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]