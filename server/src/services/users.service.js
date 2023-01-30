const { Users } = require("../../models");
class UsersService {
  static async createUser({ firstName, lastName, email, password }) {
    try {
      const user = await Users.create({ firstName, lastName, email, password });
      return user;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getAllUsers() {
    try {
      return Users.findAll({ include: "messages" });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async getUserById(id) {
    try {
      return Users.findOne({ where: { id } }, { include: "messages" });
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async updateUserById(id, { firstName, lastName, email, password }) {
    try {
      const user = await Users.findOne({ where: { id } });
      if (user) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;
        user.password = password;
        await user.save();
        return user;
      }
      return null;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }

  static async deleteUserById(id) {
    try {
      const user = await Users.findOne({ where: { id } });
      if (user) {
        await user.destroy();
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      throw new Error();
    }
  }
}

module.exports = { UsersService };
