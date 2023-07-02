const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const authJWT = require('./middleware/authJWT')
const userRoutes = require('./routes/userRoutes');
const projectRoutes = require('./routes/projectRoutes');
const pipeRoutes = require('./routes/pipeRoutes');

const app = express();

require('./dbConnection');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.all('*', authJWT.verifyUserToken);

app.use("/api/users", userRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/pipe", pipeRoutes);

app.listen(process.env.PORT, () => {
    console.log("PORT: " + process.env.PORT);
});
