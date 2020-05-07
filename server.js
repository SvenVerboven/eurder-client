const express = require('express');
const app = express();

app.use(express.static('./dist/eurder-client'));

app.listen(process.env.PORT || 8080);
