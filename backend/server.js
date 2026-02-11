import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = 4000;

//middleware


//db

//routes
app.get('/', (req, res) => {
  res.send('API WORKING');
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
