import { Input } from "-/components/ui/input";
import { ComponentProps } from "react";

export function TradeInput(props: ComponentProps<"input">) {
  return (
    <Input
      {...props}
      placeholder="0.0"
      type="number"
      className="border-none px-0 remove-arrow outline-none focus:border-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 h-14 text-xl font-medium text-secondary-foreground placeholder:text-secondary-foreground shadow-none "
    />
  );
}
