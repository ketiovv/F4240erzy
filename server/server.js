const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// TODO: read about cors
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// call sysc()
const db = require("./app/models");

// sync all models with db -> auto generate tables
db.sequelize.sync({force: true});

// stage routes
require("./app/routes/stage.routes.js")(app);

// question routes
require("./app/routes/question.routes.js")(app);

// answer routes
require("./app/routes/answer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const {exec} = require('child_process');

new Promise((resolve, reject) => {
    const migrate = exec(
        'cd app; npx sequelize-cli db:seed:all;' ,
        {env: process.env},
        err => (err ? reject(err): resolve())
    );

    // Forward stdout+stderr to this process
    migrate.stdout.pipe(process.stdout);
    migrate.stderr.pipe(process.stderr);
});