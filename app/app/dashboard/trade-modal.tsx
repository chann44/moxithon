import { Button } from "-/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogFooter,
} from "-/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "-/components/ui/tabs";
import { TradeBuyPanel } from "./trade-buy-pannle";
import { TradeSellPanel } from "./trade-sell-panel";
import { TradeTokenSelect } from "./trade-token-select";

export function TradeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Buy/Sell</Button>
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
