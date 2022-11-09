const user_model = require("../models/user.model");

module.exports = {
  add_user: async (req, res) => {
    try {
      const new_user = await user_model.create({
        name: req.body.name,
        age: req.body.age,
      });

      res.status(200).json({ message: "user sucessfully added", new_user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  user_details: async (req, res) => {
    try {
      let filter = {}
      let { page = 1, limit = 10 } = req.query;
      if (req.query.name)
        filter.name = req.query.name
      const users = await user_model
        .find(filter)
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ age: 1 });
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
