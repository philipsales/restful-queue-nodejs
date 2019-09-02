# Notifications API
* Version 1.0.0

### What is this repository for? ###

* Exclusive for AWH members only

### Dependencies ###
this api uses a number of open source projects to work properly:

* [Nodejs] - a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

* [Expressjs] - a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### How do I install it for production? ###
Please install the following sequentially:

    1. Installing Docker and Docker Compose
        1.1. Go to this link: https://docs.docker.com/engine/installation/linux/docker-ce/ubuntu/#os-requirements

        1.2. sudo apt-get install docker-compose
    2. Clone `restful-queue-nodejs` in your local machine
        ```
        git clone install https://github.com/philipsales/restful-queue-nodejs.git
        ```
    3. build `restful-queue-nodejs`:
        * restful-queue-nodejs
            ```
            cd restful-queue-nodejs
            
            docker-compose build
            ```

    4. Build and run mongodb:
        * mongodb
            ```
            cd restful-queue-nodejs
            
            docker-compose up -d authmongo
            ```

    5. Run `restful-queue-nodejs` 
        * restful-queue-nodejs
            ```
            cd restful-queue-nodejs
            docker-compose up -d authapi
            ```
    6. add the seeds for `restful-queue-nodejs`
        * restful-queue-nodejs
            ```
            cd restful-queue-nodejs
            docker exec -it authapi_me bash
            # inside the container
            node server/server.js db:seed
            ```

### How to stop service in production? ###
Please do the following:

    1. go to `restful-queue-nodejs`
        ```
        cd restful-queue-nodejs
        docker-compose stop 
        ```

### How to clean up service with clean data? ###
Please do the following:

    1. stop running service
        ```
        cd restful-queue-nodejs
        docker-compose stop 
        ```

    2. remove containers
        ```
        cd restful-queue-nodejs
        docker-compose rm -v 
        ```
        
    3. remove data (optional)
        ```
        cd restful-queue-nodejs
        sudo rm -drf data
        ```
        
    4. remove images
        ```
        cd restful-queue-nodejs
        docker rmi restful-queue-nodejs_authapi
        docker rmi mongo:3.4.10 
        ```
        
### Contribution guidelines ###

* No direct push to major branches (master, develop) - all merge to master must pass through a pull request

### Who do I talk to? ###

* philip sales
* mychar chu

**Have fun CODING! TEAM!**
[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Nodejs]: <https://nodejs.org>
   [Expressjs]: <https://expressjs.com/>