docker_build:
	docker build . -t elasticvue_com

docker_run:
	docker run --rm -p 3000:3000 elasticvue_com

docker_push:
	docker tag elasticvue_com:latest ghcr.io/cars10/elasticvue_com:latest
	docker push ghcr.io/cars10/elasticvue_com:latest

prod: docker_build docker_push
