"use client";

import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Binary, Sparkles } from "lucide-react";
import { MemeAdvisor } from "./MemeAdvisor";
import { useState } from "react";

const advisors = [
  {
    name: "稳健理财顾问",
    description: "专注于低风险、稳定收益的投资策略，适合保守型投资者",
    cost: "100 AIA",
    icon: Shield,
  },
  {
    name: "增长型顾问",
    description: "平衡风险与收益，追求中长期稳定增长",
    cost: "200 AIA",
    icon: TrendingUp,
  },
  {
    name: "量化交易顾问",
    description: "使用高频交易策略，适合追求高收益的投资者",
    cost: "500 AIA",
    icon: Binary,
  },
  {
    name: "MEME币顾问",
    description: "基于ChainLink价格预言机和AI分析的MEME币投资建议",
    cost: "300 AIA",
    icon: Sparkles,
  },
];

export function AdvisorSelection() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">AI 投资顾问仪表板</h2>
            <p className="text-sm text-muted-foreground">选择您的专属投资顾问</p>
          </div>
          <div className="space-y-4">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <advisor.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">{advisor.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    解锁费用: {advisor.cost}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {advisor.description}
                </p>
                <button
                  className="mt-3 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
                  onClick={() => setSelectedAdvisor(advisor.name)}
                >
                  解锁顾问
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      {selectedAdvisor === "MEME币顾问" && <MemeAdvisor />}
    </div>
  );
}