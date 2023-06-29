const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let users = [
  { email: "rob@dvds.com", password: "rob123" },
  { email: "john@dvds.com", password: "john123" },
];

app.post("/login", function (request, response) {
  console.log(request.body);

  for (let i = 0; i < users.length; i = i + 1) {
    if (
      users[i].email === request.body.email &&
      users[i].password === request.body.password
    ) {
      response.redirect(
        "http://127.0.0.1:5500/login-app/frontend/loggedin..html"
      );
    }
  }
  response.status(401).send("NOPE!!! it's wrong");
});

const port = 4000;
app
  .listen(port, () =>
    console.log(
      `Listening at port http://localhost:${port}. Ooosh! I added this`
    )
  )
  .on("error", function (error) {
    if (error.code === "EADDRINUSE") {
      console.error(
        "Address is already in use. Try a different port number or close any other instances of other servers."
      );
    } else {
      console.error(error);
    }
  });
