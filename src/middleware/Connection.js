import Connection from '../database/Connection.js';

const connectionMiddleware = async (req, res, next) => {
  try {
    const connection = new Connection();
    await connection.start();
    req.dbConnection = connection;

    next();
  } catch (error) {
    next(error);
  }
};

export default connectionMiddleware;
