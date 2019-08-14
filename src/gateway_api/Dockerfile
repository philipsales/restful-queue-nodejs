FROM node:8.9
RUN mkdir -p /usr/src/pcariapi
RUN mkdir -p /usr/src/pcariapi/uploads/consent_templates
RUN mkdir -p /usr/src/pcariapi/dump
RUN chmod -R 777 /usr/src/pcariapi/uploads
RUN chmod -R 777 /usr/src/pcariapi/dump
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.6 main" | tee /etc/apt/sources.list.d/mongodb-org-3.6.list
RUN apt-get update
RUN apt-get install -y mongodb-org-tools
WORKDIR /usr/src/pcariapi
COPY package.json /usr/src/pcariapi/
COPY package-lock.json /usr/src/pcariapi/
RUN npm install
COPY . /usr/src/pcariapi
EXPOSE 3000
CMD ["node", "server/server.js"]
