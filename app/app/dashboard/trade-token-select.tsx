import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "-/components/ui/select";
import { Coins } from "lucide-react";

const tokens = [
  { id: "btc", name: "Bitcoin", symbol: "BTC" },
  { id: "eth", name: "Ethereum", symbol: "ETH" },
  { id: "usdt", name: "Tether", symbol: "USDT" },
  { id: "bnb", name: "Binance Coin", symbol: "BNB" },
];

export function TradeTokenSelect() {
  return (
    <Select defaultValue="btc">
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a token" />
      </SelectTrigger>
      <SelectContent>
        {tokens.map((token) => (
          <SelectItem key={token.id} value={token.id}>
            <div className="flex items-center">
              <Coins className="mr-2 h-4 w-4" />
              <span>
                {token.name} ({token.symbol})
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
