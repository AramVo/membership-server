

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Run application database in docker

You need to have pre installed docker on your machine.


1. Pull the Postgres Docker Image
```bash 
$ docker pull postgres
```

2. Create a Docker Volume

``` bash 
$ docker volume create postgres_data
```

3. Run the Postgres Docker Container

```bash
$ docker run --name postgres_container -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 -v postgres_data:/var/lib/postgresql/data postgres
```


