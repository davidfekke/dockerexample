# specify the node base image with your desired version node:<version>
FROM node:20
# replace this with your application's default port
RUN mkdir /src

COPY package.json /src
WORKDIR /src

# Add your source files
COPY . /src
CMD ["node","index.js"]