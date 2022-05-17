# Run AfricaBins app using Docker

## firstly, navidate to the root of this project, (same directory as the Dockerfile)

### Now, build docker image.

`docker image build -t africa-bins:latest .`

### Once the image is built, you can run the docker container.

`docker container run -p 3000:3000 africa-bins:latest`

### troubleshooting ideas

1. check to see if container has been created:

`docker ps`

2. remember that containers are created from images so you need an image to create a container

`docker images`

- if you have a billion docker images on your computer, you may have to clean them out

3.  fyi: My terminal got stuck running the docker container and I had to close the terminal window
