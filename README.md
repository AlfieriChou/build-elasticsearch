# build-elasticsearch
Using docker-compose build elasticsearch environment.

### elastic-stack

#### get started
  
  * compose
  
    ```
    docker-compose up
    ```
  
### search

#### get started

  * pull image
  
    ```
    docker pull docker.elastic.co/elasticsearch/elasticsearch:6.0.0
    ```
   
  * docker run
  
    ```
    cd ./search
    make build
    ```
   
  * pull csv data
    
    ```
    cd ./search/client
    yarn run import
    ```
    
  * start app
  
    ```
    cd ./srarch/client
    yarn run start
    ```
