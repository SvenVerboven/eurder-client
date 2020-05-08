const express = require('express');
const app = express()

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/eurder-client/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static('dist/eurder-client'));

app.listen(process.env.PORT);
