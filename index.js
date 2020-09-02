require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PhonebookEntry = require("./modules/numbers");
const { response } = require("express");
const { deleteModel } = require("mongoose");

const app = express();

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

morgan.token("body", function (req, res) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.get("/api/persons", (req, res, next) => {
  PhonebookEntry.find({})
    .then((results) => {
      results ? res.json(results) : res.status(204).end();
    })
    .catch((e) => next(e));
});

app.get("/api/persons/:id", (req, res, next) => {
  PhonebookEntry.find({ _id: req.params.id })
    .then((result) => {
      result ? res.json(result) : res.status(404).end();
    })
    .catch((e) => next(e));
});

app.get("/info", (req, res, next) => {
  PhonebookEntry.find({})
    .then((results) => {
      results
        ? res.send(`<p>Phonebook has info for ${results.length} people.</p>
    <p>${new Date()}</p>`)
        : res.status(204).end();
    })
    .catch((e) => next(e));
});

app.delete("/api/persons/:id", (req, res, next) => {
  PhonebookEntry.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log(`Deleted ${result.name} from the phonebook!`);
      result ? res.json(result) : res.status(204).end();
    })
    .catch((e) => next(e));
});

app.post("/api/persons", (req, res, next) => {
  if (!req.body.name) return res.status(400).json({ error: "Name is missing" });
  if (!req.body.number)
    return res.status(400).json({ error: "Number is missing" });

  const entry = new PhonebookEntry({
    name: req.body.name,
    number: req.body.number,
  });
  entry
    .save()
    .then((savedEntry) => {
      res.json(savedEntry);
    })
    .catch((e) => next(e));
});

app.put("/api/persons/:id", (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is missing" });
  }
  if (!req.body.number) {
    return res.status(400).json({ error: "Number is missing" });
  }
  PhonebookEntry.findByIdAndUpdate(
    req.params.id,
    { number: req.body.number },
    { new: true }
  )
    .then((result) => {
      console.log(`Updated ${result.name} in the phonebook!`);
      result ? res.json(result) : res.status(204).end();
    })
    .catch((e) => next(e));
});

const unknownEndpoint = (req, res, next) => {
  res.status(404).send({ error: "Unknown endpoint" });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.log(error.message);
  if (error.name === "CastError") {
    return res.status(400).send({ error: "Invalid Id" });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
