## Para rodar com docker-compose ****

FROM node:18 as build
WORKDIR '/app'

RUN npm install -g @angular/cli@14.1.3
COPY package.json .
RUN npm install

COPY . .

EXPOSE 4200

CMD ["npm", "start"]


## Para rodar somente com docker ****

# FROM node:16.14.2 as build
# WORKDIR /usr/src/app
# COPY ["package.json", "./"]
# RUN npm install -g npm@8.18.0
# RUN npm install -g @angular/cli@14.1.1
# COPY ./ /usr/src/app/
# RUN npm install
# #ARG env=prod
# EXPOSE 4200
# #RUN chown -R node /usr/src/app/
# #USER node
# CMD ["npm", "start"]

# FROM nginx:1.17.1-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/src/index.html /usr/share/nginx/html


