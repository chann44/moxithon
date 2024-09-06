"use client";

import { usePrivy, useLogin } from "@privy-io/react-auth";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";

export function ConnectWallet() {
  const { ready, authenticated, logout } = usePrivy();
  const { login } = useLogin({
    onComplete(user, isNewUser, wasPreviouslyAuthenticated) {
      console.log("🔑 ✅ Login success", {
        user,
        isNewUser,
        wasPreviouslyAuthenticated,
      });
    },
    onError(error) {
      console.log("🔑 🚨 Login error", { error });
    },
  });
  return authenticated ? (
    <UserNav />
  ) : (
    <Button size={"sm"} onClick={login} disabled={!ready || authenticated}>
      Connect Wallet
    </Button>
  );
}
