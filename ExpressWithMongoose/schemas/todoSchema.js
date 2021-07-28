const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Instance methods
todoSchema.methods = {
  /* Custom instance */
  findActive: function () {
    return mongoose.model("Todo").find({ status: "active" });
  },
  /* Custom instance using callback */
  findActiveCallback: function (cb) {
    return mongoose.model("Todo").find({ status: "active" }, cb);
  },
};

// static methods
todoSchema.statics = {
  findByJs: function () {
    return this.find({ title: /js/i });
  },
};

// query helpers
todoSchema.query = {
  byLanguage: function (language) {
    return this.find({ title: new RegExp(language, "i") });
  },
};

module.exports = todoSchema;
