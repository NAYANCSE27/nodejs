# Description: Dockerfile for 003-es-module
FROM node:18.14.0

#set the working directory to /app
#so that all the following commands will be executed in the /app directory
#and the /app directory will be created if it doesn't exist
WORKDIR /app

#copy the package.json and package-lock.json files to the /app directory
COPY package.json /app
#copy the package-lock.json file to the /app directory
COPY package-lock.json /app

#install the dependencies
RUN npm install 

#after npm install, the node_modules folder is created
#and the node_modules folder is copied to the image
#so that the next time we build the image, we don't need to run npm install again
#and the image will be built faster
#but if we change the package.json file, we need to run npm install again
#so we need to copy the package.json file before running npm install
#and then copy the node_modules folder after running npm install
#so that the next time we build the image, we don't need to run npm install again
#and the image will be built faster
COPY . /app

#the default command to run when the container starts
CMD ["npm", "start"]

#the port that the container will expose
EXPOSE 5000