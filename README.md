#Tui demo backend project
Test backend project contains API requests, swagger documentation and unit tests.

###Technologies:

TypeScript as a language;

Jest as test framework/runner;

Back end application for get user repos.

## How to run a project locally

1) Download LTS version of [Node JS](https://nodejs.org/en/download/) from official site

2) Open the project folder on your computer using IDE (for example [Web Storm](https://www.jetbrains.com/webstorm/))

3) The project contains a "package.json" file that contains a list of all required libraries and dependencies. To install them all, enter the command "npm install" in the terminal

4) Start the project: npm run dev

5) Deploy: run command docker-compose up


When the server starts successfully your project will be running on port - localhost:3000

##Usage API

The test project allows you to make a request to get list with all github repositories for user or organization by github user name, which are not forks.

To view the route and its input / output data, follow the link to the swagger documentation http://localhost:3000/api-docs/#/


###Basic requirements of the request:

The main request to get all the repositories is as follows: "http://localhost:3000/repo/{userName}?page={page}&per_page={per_page}"

First of all service check if user exist 
Then get user repositories and in the 
finally it retrieves data of branches last commit
 
##Limitation:
Max repos per page is 100.
Max branch is 100 



