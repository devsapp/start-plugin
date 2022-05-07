var express = require('express');

var app = express();

app.get('*', (req, res) => {
  res.header('Content-Type', 'text/html;charset=utf-8')
  console.log('test');

  res.send(`node Version: ${process.version}`)
})

app.listen(9000, () => {
  console.log('start success.');
}).on('error', (e) => {
  console.error(e.code, e.message)
});