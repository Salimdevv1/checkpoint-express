const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
app.use(cors())


app.get('/', (req, res) => {
  const d = new Date();
  const time = d.getTime();
  currentDate = new Date(); 
  const timestamp = currentDate. getTime();
  const hours = currentDate.getHours()
  const day =  currentDate.getDay()
  const days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
  currentDay = days[d.getDay()-1]
  if (days.includes(currentDay) &&   9< hours || hours<17 ) {
    res.status(200).send("We are available")

  }else {
    res.status(404).send("We are not available")

  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
