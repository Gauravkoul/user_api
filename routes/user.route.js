const { Router } = require("express");
const router = Router();
const user_controller = require("../controllers/user.controller");
router.post("/add", user_controller.add_user);

router.get("/", user_controller.user_details);
module.exports = router;
