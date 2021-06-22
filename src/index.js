const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const cookieParser = require('cookie-parser');
const route = require('./routes/index');
const db = require('./config/db/index');
var cors = require('cors');

app.use(express.json());
app.use(cookieParser("buikhactao"));

// connect tới db
db.connect();


// cấu hình static tuyến đường:
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(
    {
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200
    }
));
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})