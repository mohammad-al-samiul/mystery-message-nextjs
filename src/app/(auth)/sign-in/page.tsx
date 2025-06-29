"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="bg-orange-400 px-3 py-1 rounded-sm my-2 cursor-pointer"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
}
