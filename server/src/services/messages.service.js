const { Messages } = require("../../models");

class MessagesService {
  static async createMessage({ userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message }) {
    try {
      const content = await Messages.create({ userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message });
      return content;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getMessageById(id) {
    try {
      const content = await Messages.findOne({ where: { id } });
      return content;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateMessageById(id, { userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message }) {
    try {
      const content = await Messages.update(
        { userId, showName, showReceiptient, showDate, putSoundtrack, theme, media, message },
        { where: { id } }
      );

      return this.getMessageById(content[0]);
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteMessageById(id) {
    try {
      const content = await Messages.destroy({ where: { id } });
      return content;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { MessagesService };
