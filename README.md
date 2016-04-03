# slides
My speaking slides

- Barcamp Songkhla #4 - barcampsk4 blog dev with github page


# Dockerize slides

- Run live preview server on Docker (Windows)
```
 docker run --rm --name slides -p $(docker-machine ip `docker-machine active`):8000:8000 mildronize/slides gulp serve
```
