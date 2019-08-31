FROM node:alpine
RUN mkdir -p /usr/src/sms_api
WORKDIR /usr/src/sms_api
COPY package.json /usr/src/sms_api/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/sms_api
EXPOSE 3002
CMD ["npm run dev"]