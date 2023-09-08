DOCKER_COMPOSE = docker-compose -f docker/compose/docker-compose.yml

APP_SERVICE = dashboard

.PHONY: build
build:
	docker build -f docker/node/Dockerfile . \
	-t $(APP_SERVICE)/node:dev

.PHONY: start
start:
	$(DOCKER_COMPOSE) up -d

.PHONY: stop
stop:
	$(DOCKER_COMPOSE) down

.PHONY: restart
restart: stop start

.PHONY: exec
exec:
	$(DOCKER_COMPOSE) exec $(APP_SERVICE) sh

.PHONY: install
install:
	$(DOCKER_COMPOSE) exec $(APP_SERVICE) npm run install

.PHONY: build_app
build_app:
	$(DOCKER_COMPOSE) exec $(APP_SERCIVE) npm run build

.PHONY: test
test:
	 $(DOCKER_COMPOSE) exec $(APP_SERCIVE) npm test

.DEFAULT_GOAL := start
