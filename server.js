const express = require('express')
const app = express()
const port = 8000

//mock data
let static_data = {};
static_data["sydney"] = {
  cur: 19,
  min: 16,
  max: 22,
  weather: "rain"
}
static_data["brisbane"] = {
  cur: 22,
  min: 20,
  max: 32,
  weather: "sunny"
}
static_data["melbourne"] = {
  cur: 8,
  min: 10,
  max: 11,
  weather: "snow"
}

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
    const country = req.query.country.toLowerCase() || "sydney";
    if (static_data[country]) {
      res.status(200).json({
        success: false,
        data: static_data[country]
      });
    } else {
      res.status(200).json({
        success: false
      });
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})