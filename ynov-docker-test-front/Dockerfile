FROM node:22

WORKDIR /app
COPY . .
RUN npm install -g @angular/cli
RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]