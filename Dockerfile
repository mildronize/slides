FROM node:5.10.0-onbuild
RUN npm install
RUN npm install -g gulp
VOLUME /app
EXPOSE 8000
