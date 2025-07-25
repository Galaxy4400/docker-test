# Docker commands:

## docker build -t {image_name} .

- Собирает новый образ

## docker run -d {image_name} -p 3000:3000

- запускает контейнер в фоновом режиме c пробросом на 3000 порт

## docker logs {container}

- выводит логи запущенного контейнера

## docker ps

- выводит список запущенных контейнеров

## docker stop {container}

- останавливает запущенный контейнер

## docker exec -it {container} /bin/sh

- запускает терминал внутри контейнера (ctrl + d - выход)

## docker system prune

- чистит

## docker compose up -d

- поднимает все сервисы

## docker compose down

- останавливает все сервисы
