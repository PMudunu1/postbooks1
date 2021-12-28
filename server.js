const http = require('https');
const express = require('express');
var cors = require('cors');
const booksRouter = require('./routes/books');


const app = express();
app.use(express.json());
//app.use(cors({origin: 'http://localhost:80'}));

app.use('/books', booksRouter);


app.use('/', function(req, res) {
    res.send('Server is Up');
});

const server = http.createServer(app);
//const port = 80;
const port = Process.env.PORT || 3000 ;
.listen(process.env.PORT || 5000)
//server.listen(port);
console.debug('Server port ' + port);
