#Create a base image from the already defined base image
FROM node:12.20-alpine

#Define the working directory

WORKDIR /app

#Define the command to install the dependencies for the directory
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Set the command to work for the image
CMD ["npm","start"]