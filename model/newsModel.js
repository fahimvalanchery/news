const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/newsDB', { useNewUrlParser: true });
const Schema = mongoose.Schema;

var NewsSchema = new Schema({
  text_1: String,
  text_2: String
});

var NewsData = mongoose.model('news', NewsSchema);

module.exports = NewsData;
