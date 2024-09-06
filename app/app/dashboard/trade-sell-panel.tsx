import { Button } from "-/components/ui/button";
import { TradeInput } from "./trade-input";

export function TradeSellPanel() {
  return (
    <section className="space-y-4">
      <div className="space-y-1 bg-secondary p-3 rounded border">
        <div className="flex justify-between items-center text-xs font-medium">
          <p>Sell</p>
          <p>Balance: 0.00 moxie</p>
        </div>
        <div className="flex items-center">
          <TradeInput></TradeInput>
          <div>
            <p className="font-medium text-secondary-foreground text-lg">
              Token
            </p>
            <Button className="h-5 rounded-full" size={"sm"}>
              Max
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-1 bg-secondary p-3 rounded border">
        <p>You receive</p>
        <div className="flex items-center">
          <p className="font-medium text-secondary-foreground text-xl">
            0.0{" "}
            <span className="text-muted-foreground ml-1 font-light">Moxie</span>
          </p>
        </div>
      </div>
    </section>
  );
}
