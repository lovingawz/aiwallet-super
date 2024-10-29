import { WalletOverview } from '@/components/WalletOverview';
import { PortfolioChart } from '@/components/PortfolioChart';
import { AssetAllocation } from '@/components/AssetAllocation';
import { AdvisorSelection } from '@/components/AdvisorSelection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-6 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">AI Wallet Advisor</h1>
            <p className="text-muted-foreground">Your intelligent crypto portfolio manager</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            Connect Wallet
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <WalletOverview />
          <PortfolioChart />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <AssetAllocation />
          <AdvisorSelection />
        </div>
      </div>
    </main>
  );
}