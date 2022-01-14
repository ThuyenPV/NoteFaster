const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect("mongodb://localhost:27017/Todo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Connect DB sucessful !"));
  } catch (e) {
    console.log("Connect DB failure !", e);
  }
}

module.exports = { connect };
