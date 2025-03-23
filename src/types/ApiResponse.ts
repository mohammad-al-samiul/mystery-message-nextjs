import { IMessage } from "@/model/user.model";

export interface IApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<IMessage>;
}
