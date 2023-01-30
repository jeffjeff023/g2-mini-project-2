const { MessagesService } = require("../services/messages.service");

class MessageController {
  static async createMessage(req, res) {
    try {
      const { userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message } = req.body;
      const messages = await MessagesService.createMessage({
        userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message
      });
      res.json(messages);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error creating messages" });
    }
  }

  static async getMessageById(req, res) {
    try {
      const { id } = req.params;
      const message = await MessagesService.getMessageById(id);
      res.json(message);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error getting messages" });
    }
  }

  static async updateMessageById(req, res) {
    try {
      const { id } = req.params;
      const { userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message } = req.body;
      const messages = await MessagesService.updateMessageById(id, {
        userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message
      });
      res.json(messages);
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error updating messages" });
    }
  }

  static async deleteMessageById(req, res) {
    try {
      const { id } = req.params;
      await MessagesService.deleteMessageById(id);
      res.send({ message: "message deleted successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).send({ message: "Error deleting messages" });
    }
  }
}

module.exports = { MessageController };
