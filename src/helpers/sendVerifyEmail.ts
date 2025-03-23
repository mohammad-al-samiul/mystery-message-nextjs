import { resend } from "@/config/resend.config";
import { IApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/verificationEmail";

export default async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
): Promise<IApiResponse> {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystery message | Verificatin code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });

    return { success: true, message: "Verification email sent successfully" };
  } catch (error) {
    console.log("Error sending verification email", error);
    return { success: false, message: "Failed to send verification email" };
  }
}
