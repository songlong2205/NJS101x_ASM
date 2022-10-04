const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

const adminRoute = require('./routes/admin');
const userRoute = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());

app.use(adminRoute);
app.use(userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})