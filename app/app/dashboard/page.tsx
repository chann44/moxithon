import { FansTokenTable } from "./fans-token-table";
import { TradeModal } from "./trade-modal";

export default function DashboardPage() {
  return (
    <main>
      <div className="flex flex-col gap-y-1">
        <h1 className="text-xl font-medium">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          View Your Fans Token Here
        </p>
      </div>
      <FansTokenTable />
    </main>
  );
}
