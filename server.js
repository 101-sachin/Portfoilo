const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./dbconfig/mongodb");

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.use(cors());
app.use(express.json());


const homepageRouter = require('./api/homepage');
const skillsRouter = require('./api/skills');
const projectsRouter = require('./api/projects')

app.use('/home', homepageRouter);
app.use('/skills', skillsRouter);
app.use('/projects', projectsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
