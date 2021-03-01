import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const {ENV, PORT} = process.env
const app = express()

if (ENV === 'development'){
  console.log('Developmen config')
}

app.get('*', (req, res) => {
  console.log('hola mundo')
  res.send({hello: 'express'})
});

app.listen(PORT, (err) => {
  if(err) console.log(err);
  else console.log('Server running on port 3000')
});



