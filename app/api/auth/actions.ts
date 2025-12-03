"use server";

import { signIn, signOut } from "@/config/auth";
import { AuthError } from "next-auth";

export async function authenticate(email: string) {
  try {
    await signIn("credentials", {
      email,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { success: false, error: "Authentication failed" };
    }
    throw error;
  }
}

export async function logout() {
  await signOut({ redirect: false });
}
