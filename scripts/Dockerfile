FROM node:18
RUN mkdir /src

ARG UPLOAD_TO_S3=0
ARG DEPLOYMENT_ENV=prod
ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV LOGGING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

# tool dependencies
RUN npm config set registry http://registry.npmjs.org/ \
&& npm install -g yarn && npm install -g next

RUN mkdir -p /etc/nginx
COPY proxy/sites-enabled /etc/nginx/sites-enabled

# cached layer for node_modules
WORKDIR /src/
ADD package.json /src/
RUN npm install

# add source files
ADD . $WORKDIR


# set working directory
WORKDIR /src/dist
ENV WORKDIR /src/dist

# move built files to working dir
VOLUME /etc/nginx/sites-enabled /src/build

EXPOSE 3030
CMD start