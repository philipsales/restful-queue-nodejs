FROM node:8.9
RUN mkdir -p /usr/src/email_api
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.6 main" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
RUN apt-get update
WORKDIR /usr/src/email_api
COPY package.json /usr/src/email_api/
COPY package-lock.json /usr/src/email_api/
RUN npm install
COPY . /usr/src/email_api
EXPOSE 3000
CMD ["node", "server/server.js"]
