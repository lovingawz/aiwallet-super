"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const assets = [
  {
    name: "Bitcoin",
    value: 32500,
    change: "+5.2%",
    icon: "₿",
  },
  {
    name: "Ethereum",
    value: 12800,
    change: "+3.8%",
    icon: "Ξ",
  },
  {
    name: "AIA Token",
    value: 3500,
    change: "+2.1%",
    icon: "A",
  },
];

export function AssetAllocation() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Asset Allocation</h2>
          <p className="text-sm text-muted-foreground">
            Current distribution of your portfolio
          </p>
        </div>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div
              key={asset.name}
              className="flex items-center justify-between rounded-lg bg-muted/50 p-4"
            >
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-lg font-semibold">{asset.icon}</span>
                </div>
                <div>
                  <h3 className="font-medium">{asset.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    ${asset.value.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className="flex items-center text-sm text-green-500">
                <TrendingUp className="mr-1 h-4 w-4" />
                {asset.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}