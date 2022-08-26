const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Нэрээ оруулна уу"],
      minlength: [3,'Хэтэрхий богино нэр оруулсан байна'],
      maxlength: [50,'Хэтэрхий урт нэр оруулсан байна'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Имэйл оруулна уу"],
      validate: {
        validator: validator.isEmail,
        message: "Хүчинтэй имэйл оруулна уу",
      },
    },
    country: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      minlength:[8,'утасны дугаараа зөв оруулан уу'],
      maxlength:[8,'утасны дугаараа зөв оруулан уу']
    },
    password: {
      type: String,
      minlength: [6,'Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой'],
      required: [true, "Нууц үгээ оруулна уу"],
      select:false
    },
    verified: {
      type: Boolean,
      default:false
    },
    emailToken: {
      type:String,
      select:false

    },
    role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
      select:false

    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  // console.log(this.modifiedPaths());
  // console.log(this.isModified('name'));
  if (!this.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// UserSchema.pre("save", async function () {
//   // console.log(this.modifiedPaths());
//   // console.log(this.isModified('name'));
//   if (!this.isModified("password")) return;
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });


UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

UserSchema.methods.createJWT = function () {
    const token = jwt.sign({userId:this._id,role:this.role},process.env.JWT_SECRET,{
      expiresIn: process.env.JWT_LIFETIME,
    });

    console.log("shineer token vvslee")
    return token;
}

const User =  mongoose.model("users", UserSchema);

module.exports = User;