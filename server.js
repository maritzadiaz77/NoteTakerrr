const express = require('express');
const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 3001;//This is the port that we are using

//these 3 lines of code added are essential
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api',apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
