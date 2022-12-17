const { Schema, model } = require("mongoose");

module.exports.Otp = model(
  "Otp",
  Schema(
    {
      number: {
        type: Number,
        required: true,
      },
      otp: {
        type: String,
        required: true,
      },
      createdAt: { type: Date, default: Date.now, index: { expires: 300 } },
    },
    { timesstamps: true }
  )
);
