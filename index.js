const mongoose = require('mongoose');
const app = require('./app');
const PORT = 3000;

const uri = "mongodb://localhost:27017/temp_change";
const mongo_config = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
mongoose.connect(uri, mongo_config).then(_ => console.log(`MongoDB connected to ${uri}`))

app.listen(PORT, _ => console.log(`server is running on port ${PORT}`));