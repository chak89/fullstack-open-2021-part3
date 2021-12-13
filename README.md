# FULLSTACKOPEN 2021 - Part 3

## MAIN REPO
https://github.com/chak89/fullstack-open-2021

## Heroku deployment 
https://thawing-woodland-42106.herokuapp.com/


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