# Docker commands:
# Build:        docker build -t {repositoryName}:{version} .
# Run:          docker run -d -p {hostIP}:{hostPortToExpose}:{exposedPort} {repositoryName}:{version}
# Images:       docker images
# Containers:
#   Online:     docker ps
#   All:        docker ps -l
# Remove:
#   Image:      docker rmi {repositoryName}:{version}
#   Container:  docker rm {id}
# Caption:    -d Detached
#             -p port

#Begin of DockerFile
# Version needs to be the same for all developers
FROM node:6.11.2

# Install required packaged to run server.js (server.js needs to be in ES5)
RUN npm install express
RUN npm install open
RUN npm install compression

# Adding files needed to run the app
ADD dist ./
ADD tools/prodServerES5.js ./

# Setting app entry point
CMD node prodServerES5.js

EXPOSE 4000


