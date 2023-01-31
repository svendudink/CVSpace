

# build
FROM node:18.0.0 as build

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY client client
COPY client/src/config/dockerconfig/config.js client/src/config/config.js
RUN yarn install --network-timeout 12000000
RUN yarn build:client
ARG "mytest"
ENV TEST=$"mytest"
ARG my2test
ENV TEST2=$my2test

#webserver
FROM nginx:stable-alpine
COPY client/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/client/build /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


