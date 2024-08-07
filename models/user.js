const { Schema, models, model } = require("mongoose");

const UsirSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists(incase of failure)"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    // ],
  },
  image: {
    type: String,
  },
});

const Usir = models.Usir || model("Usir", UsirSchema);
// to enhance reusability, check models and see if Usir model is still in memory or not (Usir because collides with hotel booking)

export default Usir;