import { Avatar, AvatarFallback, AvatarImage } from "-/components/ui/avatar";
import { Button } from "-/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "-/components/ui/card";
import { LucideCopy, LucideDollarSign, LucideWallet } from "lucide-react";
import { TradeModal } from "../../trade-modal";

export default function FanTokenPage() {
  return (
    <main className="flex flex-col gap-y-6">
      <Card className="py-6">
        <CardContent>
          <div className="flex gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/path-to-your-image.jpg" alt="User avatar" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-2xl">Farcaster Network Token</p>
          </div>
          <div className="py-6 flex flex-col gap-y-6">
            <p>This section is for Token Name</p>
            <div>
              <div className="flex items-center gap-4">
                <LucideDollarSign />
                <div className="flex flex-col gap-y-1">
                  <p className="text-muted-foreground">Total Earnings</p>
                  <p className="text-xl font-medium">23,000,4 Moxie</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <LucideWallet />
              <div className="flex flex-col gap-y-1">
                <p className="text-muted-foreground">Token Address</p>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-medium">0x...34</p>
                  <Button className="h-4 w-4" size={"icon"} variant={"ghost"}>
                    <LucideCopy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex-row justify-between items-center">
          <CardTitle className="text-2xl">Fan Token Details</CardTitle>
          <TradeModal />
        </CardHeader>
      </Card>
    </main>
  );
}
