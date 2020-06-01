const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/user", require("./routes/user"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/dashboard/todos", require("./routes/dashboard/todos"));

//reserve react single page
// if (process.env.NODE_ENV === 'production') {
if (true) {
  app.use(express.static('build'))
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}


app.listen(process.env.APP_PORT, () => {
  console.log(`Server is starting on port`, process.env.APP_PORT);
});