FROM node:14
WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm install -D
COPY app .
EXPOSE 3000
CMD ["start"]
ENTRYPOINT ["/usr/local/bin/npm", "run"]