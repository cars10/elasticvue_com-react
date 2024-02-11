docker_build:
	docker build . -t elasticvue_com

docker_push:
	docker tag elasticvue_com:latest ghcr.io/cars10/elasticvue_com:latest
	docker push ghcr.io/cars10/elasticvue_com:latest

prod: docker_build docker_push
