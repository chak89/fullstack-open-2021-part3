# FULLSTACKOPEN 2021 - Part 3

## General info
Implementing functionality on the server side of the stack with midddleware error handling and deploy both front-end from part 2 and server to to the internet(Heroku).  
A REST API in Node.js by using the Express library, and the application's data will be stored in a MongoDB database. 

## MAIN REPO
https://github.com/chak89/fullstack-open-2021

## App - Heroku deployment 
https://thawing-woodland-42106.herokuapp.com/


## Technologies
* Javascript
* Node v16.13.1
* Express@4.17.1
* Heroku
* MongoDB - https://www.mongodb.com/
* Morgan

## API docs
`GET /info` - server responds with some basic info  
`GET /api/persons` - list all persons  
`GET /api/persons/:id` - get a specific person by providing the parameter 'id'  
`DELETE /api/persons/:id` - delete a specific person by providing the parameter 'id'  
`POST /api/persons` - create a new person object and post to the server  


Example usage:
```
POST https://thawing-woodland-42106.herokuapp.com/api/persons/
```
with a JSON body:
```
{
    "name": "Elon Musk ",
    "number": "123456798"
}
```