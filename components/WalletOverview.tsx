"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export function WalletOverview() {
  return (
    <Card className="p-6">
      <div className="space-y-2">
        <h2 className="text-sm font-medium text-muted-foreground">
          Total Portfolio Value
        </h2>
        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold">$48,800</span>
          <span className="flex items-center text-sm text-green-500">
            <ArrowUpRight className="mr-1 h-4 w-4" />
            +16.3%
          </span>
        </div>
      </div>
    </Card>
  );
}