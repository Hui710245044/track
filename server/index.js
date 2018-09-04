import './common';
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'express-cors';
import router from './router';
import './timer';
const app = express();
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
app.use(cors({
    allowedOrigins: [
        "localhost:8080"
    ]
}));

app.use(bodyParser.json({limit: '50mb'}));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', port)
router(app);

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
