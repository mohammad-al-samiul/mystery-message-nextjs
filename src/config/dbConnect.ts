import mongoose from "mongoose";

export interface IConnection {
  isConnected?: number;
}

const connection: IConnection = {};

async function dbConnect(): Promise<void> {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Database connected!");
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
