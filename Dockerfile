# syntax = docker/dockerfile:experimental

FROM python:3.8.16-alpine

RUN mkdir /app
COPY ./requirements.txt /app

# Install required package
RUN apk update && \
    apk add --no-cache --virtual .build-deps \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev \
    git bash

WORKDIR /app
RUN python -m pip install -r requirements.txt
COPY . .
EXPOSE 8000

ENTRYPOINT [ "bash", "entrypoint.sh" ]