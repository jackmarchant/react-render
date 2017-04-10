import express from 'express';
import bodyParser from 'body-parser';
import createRoutes from './routes';

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
createRoutes(app);

app.listen(process.env.PORT || 4000);