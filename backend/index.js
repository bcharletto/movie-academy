const { response } = require('express');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

const pg = require('knex')({
  client: 'pg',
  connection: 'postgres://postgres:b.47911383@localhost:5432/movieacademy',
  searchPaths: ['knex', 'public']
})


app.get('/my_list', async (request, response) => {
  const result = await pg('movies').select('*').where('category_id', 1);
  console.log('My list: ', result);
  response.json(result);
})

app.get('/trending', async (request, response) => {
  const result = await pg('movies').select('*').where('category_id', 2);
  console.log('Trending: ', result);
  response.json(result);
})

app.get('/recently_added', async (request, response) => {
  const result = await pg('movies').select('*').where('category_id', 3);
  console.log('Recently Added: ', result);
  response.json(result);
})

app.listen(5001, () => {
  console.log('Server is working');
})