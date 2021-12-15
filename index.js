require('dotenv').config()
const express = require('express')

//Logging middleware
const morgan = require('morgan')

const cors = require('cors')
const Person = require('./models/person')

const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

//Display data sent in the HTTP POST request.
morgan.token('body', (req) => JSON.stringify(req.body))

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


//Get all
app.get('/api/persons', (request, response, next) => {
    Person.find({}).then(person => {
        response.json(person)
    })
    .catch(error => next(error))
})

//Show some basic info
app.get('/info', (request, response, next) => {
    Person.find({}).then(persons => {
        const responseString = `Phonebook has info for ${persons.length} people
        <br><br>${new Date()}`
        response.send(responseString);
    })
    .catch(error => next(error))
})

// Fetch single resource
app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id).then(result => {
        response.json(result)
    })
    .catch(error => next(error))
})

// Process HTTP DELETE request, delete a single resource
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id).then( result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

//New phonebook entries can be added by making HTTP POST requests
//morgan() show tiny and the :body in the server console.
app.post('/api/persons', morgan(':body'), (request, response, next) => {
    const personEntry = request.body

    const person = new Person({
        "name": personEntry.name,
        "number": personEntry.number
    })

    //Save person to MongoDB
    person.save().then(savedPerson => {
        return response.json(savedPerson)
    })
    .catch(error => next(error))
})


app.put('/api/persons/:id', (request, response, next) => {
    console.log('PUT:', request.body)
    Person.findByIdAndUpdate(request.params.id, request.body, {new: true} )
    .then( updatedPerson => {
        response.json(updatedPerson)
    })
    .catch(error => next(error))
})


//Middleware errorhandling
const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    return response.status(400).json({ error: error.message })
  }
  
  // this has to be the last loaded middleware, so that next() inside other middelware will call this
  app.use(errorHandler)