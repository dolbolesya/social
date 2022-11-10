const express = require('express');
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/api');

const app = express();



app.use(express.urlencoded({extended: true}));
app.use(apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is start`);
    console.log(`port: ${PORT}`)
})
