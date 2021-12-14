require('dotenv').config()
const express = require('express')
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

/* let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
] */

//Generate a random ID in defined range
const getRandomId = () => {
    return Math.floor(Math.random() * 100000) + 1
}

//Get all
app.get('/api/persons', (request, response) => {
    Person.find({}).then(person => {
        response.json(person)
    })
})

app.get('/info', (request, response) => {
    const responseString = `Phonebook has info for ${persons.length} people
                            <br><br>${new Date()}`

    response.send(responseString);

})

// Fetch single resource
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

// Process HTTP DELETE request, delete a single resource
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        persons = persons.filter(p => p.id !== id)
        response.status(204).end()
    } else {
        response.status(404).end()
    }
})

//New phonebook entries can be added by making HTTP POST requests
app.post('/api/persons', morgan(':body'), (request, response) => {
    const personEntry = request.body

/*     if (!personEntry.name && !personEntry.number) {
        return response.status(404).json({
            error: 'name and/or number is missing'
        })
    } */

    //Check if the name already exists in the phonebook
/*     if (persons.find(p => p.name === personEntry.name)) {
        return response.status(406).json({
            error: 'name already exist'
        })
    } */

    const person = new Person({
        "id": getRandomId(),
        "name": personEntry.name,
        "number": personEntry.number
    })


    //Save person to MongoDB
    person.save().then(savedPerson => {
        return response.json(savedPerson)
    })
})