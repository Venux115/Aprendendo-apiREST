const { Router } = require("express");
const UserController = require("../controller/User.js");
const router = new Router();

router.get("/", UserController.index);
router.post("/", UserController.create);
router.get("/:id", UserController.show);
router.delete("/:id", UserController.delete);
router.put("/:id", UserController.update);

module.exports = router;
