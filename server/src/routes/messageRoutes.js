const express = require("express");
const { MessageController } = require("../controllers/message.controllers")
const router = express.Router();

router.post("/", MessageController.createMessage);
router.get("/:id", MessageController.getMessageById);
router.put("/:id", MessageController.updateMessageById);
router.delete("/:id", MessageController.deleteMessageById);
module.exports = router;
