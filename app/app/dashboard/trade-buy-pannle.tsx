import { TradeInput } from "./trade-input";

export function TradeBuyPanel() {
  return (
    <section className="space-y-4">
      <div className="space-y-1 bg-secondary p-3 rounded border">
        <div className="flex justify-between items-center text-xs font-medium">
          <p>Buy</p>
          <p>Balance: 0.00 moxie</p>
        </div>
        <div className="flex items-center">
          <TradeInput></TradeInput>
          <p className="font-medium text-secondary-foreground text-lg">Token</p>
        </div>
      </div>
      <div className="space-y-1 bg-secondary p-3 rounded border">
        <p>You pay</p>
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
