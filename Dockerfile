# 1) APP
# pull lts-version of node.js for npm manager 
FROM node:lts-iron as build-node
# create folder for an app
RUN mkdir -p /usr/src/resume.page
# switch to newly created folder
WORKDIR /usr/src/resume.page
# copy file with dependencies from folder where Dockerfile is into docker-image
COPY package.json package.json
# install dependencies
RUN yarn install
# copy all files to docker-image
COPY . .
# build app to have static html
RUN yarn run build

# 2) NGINX
# pull apline-version of nginx
FROM nginx:1.21.0-alpine as build-nginx
# set production mode for node.js (logging is kept to a minimum, cache is optimized)
ENV NODE_ENV production
# remove existing files in html folder
RUN rm -rf /usr/share/nginx/html/*
# copy build of app into html folder
COPY --from=build-node /usr/src/resume.page/out /usr/share/nginx/html
# add nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
# run container in a foreground (good practice: 1 container - 1 service)
CMD ["nginx", "-g", "daemon off;"]