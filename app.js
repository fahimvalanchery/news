const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const NewsData = require('./model/newsModel');

const app = new express();
const PORT = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/news', (req, res) => {
  NewsData.find()
    .then(news => {
      res.send(news);
    })
    .catch(err => {
      throw err;
    });
});

app.post('/news', (req, res) => {
  const singleNews = {
    text_1: req.body.text_1,
    text_2: req.body.text_2
  };
  const news = new NewsData(singleNews);
  news.save().catch(err => {
    throw err;
  });
  res.send(news);
});

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
