docker_build:
	docker build . -t ghcr.io/cars10/elasticvue_com:latest

docker_run:
	docker run --rm -p 3001:3000 --name elasticvue_com ghcr.io/cars10/elasticvue_com:latest

docker_push:
	docker push ghcr.io/cars10/elasticvue_com:latest

prod: docker_build docker_push
