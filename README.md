## Backend project for Phonebook

#### 3.1

Initialized in a new repository as requested. Implemented a node app to return the list of phonebook entries.

#### 3.2 - 3.3

Implemented the info page, and the single page for each person in the phonebook.

#### 3.4 - 3.6

It's not possible to delete by user ID to the unique URL of the phonebook entry. Entries can also be added with POST requests, and ID generation is better at avoiding collisions now. Implemented error handling for new entries.

#### 3.7 - 3.8

Added morgan middleware and configured it to show the data sent by creating a new token and using JSON.stringify.

#### 3.9 - 3.11

Hosted the phonebook backend and frontend on Heroku. Link [https://myphonebook69.herokuapp.com/](https://myphonebook69.herokuapp.com/)

#### 3.12

Created command line interface for mongo db add and get number functions, located in file 'mongo.js'

#### 3.13 - 3.18

Entries are now fetched from database. Entries are now saved to database. Calls to update the number or delete a number are also working now. Moved error handling to middleware. Verified that API routes work directly with browser and Postman.

#### 3.19 - 3.21

Added validation using mongoose-unique-validator package. Expanded frontend to catch errors and log the message to a notification. Deployed the database to production. Link [https://myphonebook69.herokuapp.com/](https://myphonebook69.herokuapp.com/)

#### 3.22

Added ESLint to app, and fixed all warnings.
