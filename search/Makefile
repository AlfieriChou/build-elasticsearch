###########################################
build:
	@docker run -d --name elastic \
		-p 9200:9200 \
		-e 'http.host=0.0.0.0' \
		-e 'transport.host=127.0.0.1' \
		-e 'http.cors.enabled=true' \
		-e 'http.cors.allow-origin=*' \
		-e 'xpack.security.enabled=false' \
		docker.elastic.co/elasticsearch/elasticsearch:6.0.0

remove:
	@docker stop elastic
	@docker rm elastic

rebuild:
	@make remove
	@make build