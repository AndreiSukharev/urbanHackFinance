# Urban Hack
Financial process visualization service

[Server] Python (Flask)

[Client] Vue.js

[Database] PostgreSQL

[Deployment] Docker


## Getting Started

#### Install npm
```
brew install node
```

#### Install docker

```
https://docs.docker.com/compose/install/
```

## Build and Run

```
git clone https://github.com/AndreiSukharev/urbanHackFinance.git urbanHackFinance

cd urbanHackFinance
docker-compose up --build

front: http://localhost:8080
server: http://localhost:4440/ 
```

#### Note Docker

Create test users:

```
docker exec urban_hack_flask bash -c "python test_entity.py"
```
Run postgres client:

```
docker exec -it urban_hack_postgres psql hackDB user
```
Enter in container:
```
docker exec -it urban_hack_flask bash
```
Remove all:
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -a -q)
```
