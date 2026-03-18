//Core Module
const path=require('path')
//External module
const express=require('express');
//Local module
const storeRouter=require('./routes/storeRouter')
const {hostRouter}=require('./routes/hostRouter')
const rootDir=require('./utils/pathUtil');
const { pageNotFound } = require('./Controllers/errors');

const app = express();
app.set("view engine","ejs");
app.set('views','views');

const PORT=3000;

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host",hostRouter);
app.use(express.static(path.join(rootDir,"public")));

app.use(pageNotFound);

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});