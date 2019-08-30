FROM node:8.9
RUN mkdir -p /usr/src/sms_api
RUN apt-get update
WORKDIR /usr/src/sms_api
COPY package.json /usr/src/sms_api/
COPY package-lock.json /usr/src/sms_api/
RUN npm install
COPY . /usr/src/sms_api
EXPOSE 3002
CMD ["npm run dev"]