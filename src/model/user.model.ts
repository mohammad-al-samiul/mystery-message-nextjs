import { Document, Schema } from "mongoose";

export interface IMessage extends Document {
  content: string;
  createAt: Date;
}

const messageSchema = new Schema<IMessage>({
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
