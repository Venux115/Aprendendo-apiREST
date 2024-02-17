const bcrypt = require("bcryptjs");

class HashHelper {
  static async hashPassword(password) {
    try {
      const saltRound = 10;
      const hashedPassword = await bcrypt.hash(password, saltRound);

      return hashedPassword;
    } catch (error) {
      throw new Error(`Erro ao fazer hash de senha \n ${error}`);
    }
  }

  static async verifyPassword(password, password_hash) {
    try {
      return await bcrypt.compare(password, password_hash);
    } catch (error) {
      throw new Error(`Erro ao verificar senha \n ${error}`);
    }
  }
}

module.exports = HashHelper;
