// "use client";

import { Button } from "-/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "-/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "-/components/ui/tabs";
import { TradeBuyPanel } from "./trade-buy-pannle";
import { TradeInput } from "./trade-input";
import { TradeSellPanel } from "./trade-sell-panel";
import { TradeTokenSelect } from "./trade-token-select";

export function TradeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-green-100 text-green-500 hover:bg-green-300 hover:text-green-500"
          variant={"outline"}
        >
          Buy/Sell
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-y-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">
            Trade Token Name
          </DialogTitle>
        </DialogHeader>
        <TradeTokenSelect />
        <Tabs defaultValue="buy">
          <TabsList className="w-full">
            <TabsTrigger className="w-full " value="buy">
              Buy
            </TabsTrigger>
            <TabsTrigger className="w-full" value="sell">
              Sell
            </TabsTrigger>
          </TabsList>
          <TabsContent value="buy">
            <TradeBuyPanel />
          </TabsContent>
          <TabsContent value="sell">
            <TradeSellPanel />
          </TabsContent>
        </Tabs>
        <DialogFooter className="justify-start">
          <Button className="w-full">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
