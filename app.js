const express = require('express');
// master
const app = express();

const port = 3000;
app.use(require('./routes'));
app.get('/', (req, res) => {
    res.send({message:"Hello Get !"});
});
app.post('/', (req, res) => {
    res.send({message:"Hello Get !"});
});
app.delete('/user', (req, res) => {
    res.send({message:"Hello user !"});
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))