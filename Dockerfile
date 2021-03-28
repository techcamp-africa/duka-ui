# pull official base image
FROM node:alpine as build


# set working directory
WORKDIR /app

COPY ./package*.json /app/

# install app dependencies

RUN npm install --silent
RUN npm install react-scripts -g --silent

# add app / copy
COPY . .

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

RUN react-scripts --max_old_space_size=4096 build

# production environment
FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

# new
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
