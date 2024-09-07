"use client";

import { Avatar, AvatarFallback, AvatarImage } from "-/components/ui/avatar";
import { Button } from "-/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "-/components/ui/dropdown-menu";
import {
  useLogout,
  usePrivy,
  FarcasterWithMetadata,
} from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

export function UserNav() {
  const router = useRouter();
  const { user } = usePrivy();
  const { logout } = useLogout({
    onSuccess: () => {
      console.log("🫥 ✅ logOut onSuccess");
      router.push("/");
    },
  });
  const farcasterAccount = user?.linkedAccounts.find(
    (a) => a.type === "farcaster"
  ) as FarcasterWithMetadata;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={farcasterAccount?.pfp || ""} alt="@shadcn" />
            <AvatarFallback>
              {farcasterAccount?.displayName?.split("").slice(0, 1)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {farcasterAccount?.username}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          Disconnect
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
