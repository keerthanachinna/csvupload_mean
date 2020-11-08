const express=require('express');
const bodyParser=require('body-parser');
const config=require('./config/config');


let app=express();
app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));

