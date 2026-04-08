const mongoose = require("mongoose");

const softDeletePlugin = (schema) => {
  schema.add({
    isDeleted: { type: Boolean, default: false },
  });

  // Override delete
  schema.methods.softDelete = function () {
    this.isDeleted = true;
    return this.save();
  };

  // Automatically filter deleted docs
  schema.pre(/^find/, function (next) {
    this.where({ isDeleted: false });
    next();
  });
};

module.exports = softDeletePlugin;