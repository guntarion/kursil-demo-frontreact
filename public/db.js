var bookmark = require('./api/bookmark.json');
var chat = require('./api/chats.json');
var chatMember = require('./api/chatMember.json');
var defaultBoard = require('./api/defaultboard.json');
var customBoard = require('./api/customboard.json');
var products = require('./api/product.json');
var email = require('./api/email.json');
var task = require('./api/task.json');
var todo = require('./api/todo.json');
var contacts = require('./api/contacts.json');
var masonry = require('./api/masonry.json');
var lightImage = require('./api/image-light.json');
var bigImage = require('./api/image-big-light.json');
var Learning = require('./api/learning.json');
var JobSearchApi= require('./api/jobSearch.json');
var tableData= require('./api/tableData.json');
var chartist =require('./api/chartistData.json');
var chartJs= require('./api/chartjsData.json');
var googleChart= require('./api/googleChartData.json');
var Faq= require('./api/Faq.json');

module.exports = function () {
  return {
    bookmark,
    chat,
    defaultBoard,
    chatMember,
    customBoard,
    products,
    email,
    task,
    todo,
    contacts,
    masonry,
    lightImage,
    bigImage,
    Learning,
    JobSearchApi,
    tableData,
    chartist,
    chartJs,
    googleChart,
    Faq
  };
};
