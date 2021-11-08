const express = require('express')
const app = express()

var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://opend.data.go.th/get-ckan/datastore_search?resource_id=48039a2a-2f01-448c-b2a2-bb0d541dedcd',
  'headers': {
    'api-key': 'ubbLAWbsP11TdfB4RWXAqvbDTIHb8N3N'
  }
};


app.listen(6060, () => {
    console.log("server is running on port 8080");
  });