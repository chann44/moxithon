"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Button } from "./ui/button";
import { UserNav } from "./user-nav";

export function ConnectWallet() {
  const { authenticated } = usePrivy();
  return authenticated ? (
    <UserNav />
  ) : (
    <Button size={"sm"}>Connect Wallet</Button>
  );
}
