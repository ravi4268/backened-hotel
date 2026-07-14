const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    password: { type: String, required: true, select: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = crypto.createHash("sha256").update(this.password).digest("hex");
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = function (candidatePassword) {
  if (!this.password) return false;
  const hashed = crypto.createHash("sha256").update(candidatePassword).digest("hex");
  // Support both already-hashed and plain-text stored passwords
  return this.password === hashed || this.password === candidatePassword;
};

module.exports = mongoose.model("User", userSchema);