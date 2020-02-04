# Creating an API with the ExpressJS library

This project contains the source code of an API built in ExpressJS for a series of video tutorials made for Brazilians developers.

It contains the full source code at the master branch and each video branches to who wants to practice.



## Branches

Although the branches names are in Portuguese, you will find that all the code are in English.

Each branch defines one lesson and use case, but the *master* branch contains the entire project.

001 - Configuring the initial setup: https://github.com/makinhs/expressjs-api-tutorial/tree/001-criando-o-projeto

002 - Configuring the project Typescript: https://github.com/makinhs/expressjs-api-tutorial/tree/002-configurando-typescript

003 - Configuring your first User CRUD routes: https://github.com/makinhs/expressjs-api-tutorial/tree/003-configurando-primeiras-rotas

004 - Configuring your first controller: https://github.com/makinhs/expressjs-api-tutorial/tree/004-configurando-controller

005 - Configuring your first service: https://github.com/makinhs/expressjs-api-tutorial/tree/005-configurando-service

006 - Configuring your first middleware: https://github.com/makinhs/expressjs-api-tutorial/tree/006-configurando-middlewares

007 - Configuring your first tests: https://github.com/makinhs/expressjs-api-tutorial/tree/007-configurando-testes

008 - Configuring auth: https://github.com/makinhs/expressjs-api-tutorial/tree/008-configurando-auth

009 - Configuring Docker files: https://github.com/makinhs/expressjs-api-tutorial/tree/009-configurando-docker

010 - Basic Mongo configuration: https://github.com/makinhs/expressjs-api-tutorial/tree/010-configurando-mongodb

011 - Configuring basic permissions usages: https://github.com/makinhs/expressjs-api-tutorial/tree/011-configurando-permissoes

012 - Configuring basic logs with winston: https://github.com/makinhs/expressjs-api-tutorial/tree/012-configurando-logs

## I just want to use it!

Checklist of what you should have:

- Node installed
- Docker installed
    - run: npm run dev
    - it will start the docker-compose and it will pull a mongo image to serve as your mongo database and it will restart the container each time you will change your code.
    - the API port is: 3000
    
The project itself contains a pre-made scaffold API that is a good starting point to develop an API but its not 100% complete neither is a 100% suggestion of what you should be doing. The idea of this
project is to guide self-students on each point that is important for an API to have, going through 
modularization, common patterns, and a good security level.

Please make sure to remove the hard-coded jwtSecret when you will be using for your own project. You could export as a node variable the values that you want and import it as well.

Have fun ;)
