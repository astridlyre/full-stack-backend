const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));

morgan.token("body", function (req, res) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

const generateId = () => {
  let id = new Date().getTime();
  return id + Math.floor(Math.random() * 50);
};

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);
  person ? res.json(person) : res.status(404).end();
});

app.get("/info", (req, res) => {
  const timeAccessed = new Date();
  res.send(`<p>Phonebook has info for ${persons.length} people.</p>
  <p>${timeAccessed}</p>`);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = +req.params.id;
  const person = persons.find((person) => person.id === id);
  if (person) {
    persons = persons.filter((person) => person.id !== id);
    res.json(person).status(204).end();
  } else {
    res.status(404).end();
  }
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  // checks
  if (!body.name) {
    return res.status(400).json({ error: "Name is missing" });
  }
  if (!body.number) {
    return res.status(400).json({ error: "Number is missing" });
  }
  if (
    persons.find(
      (person) =>
        person.name.toLowerCase() === body.name.toLowerCase() ||
        person.number === body.number
    )
  ) {
    return res.status(400).json({ error: "Name or number must be unique" });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };
  persons = persons.concat(person);
  res.json(person);
});

app.put("/api/persons/:id", (req, res) => {
  const body = req.body;
  const id = +req.params.id;

  if (!body.name) {
    return res.status(400).json({ error: "Name is missing" });
  }
  if (!body.number) {
    return res.status(400).json({ error: "Number is missing" });
  }
  persons = persons.map((person) => (person.id !== id ? person : body));
  res.json(body);
});

const unknownEndpoint = (req, res, next) => {
  res.status(404).send({ error: "Unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT);
console.log(`Server started on port ${PORT}`);
