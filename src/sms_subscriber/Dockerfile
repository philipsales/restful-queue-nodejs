FROM node:8.9
RUN mkdir -p /usr/src/sms_subscriber
RUN apt-get update
WORKDIR /usr/src/sms_subscriber
COPY package.json /usr/src/sms_subscriber/
COPY package-lock.json /usr/src/sms_subscriber/
RUN npm install
COPY . /usr/src/sms_subscriber
EXPOSE 3001
CMD ["npm run dev"]