"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Sparkles, TrendingUp, AlertCircle } from "lucide-react";

interface MemeToken {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  aiSentiment: string;
  riskLevel: "Low" | "Medium" | "High";
}

export function MemeAdvisor() {
  const [memeTokens, setMemeTokens] = useState<MemeToken[]>([
    {
      name: "Pepe",
      symbol: "PEPE",
      price: 0.000001234,
      change24h: 15.5,
      aiSentiment: "看涨",
      riskLevel: "High",
    },
    {
      name: "Dogwifhat",
      symbol: "WIF",
      price: 0.234,
      change24h: 8.3,
      aiSentiment: "观望",
      riskLevel: "Medium",
    },
    {
      name: "BONK",
      symbol: "BONK",
      price: 0.00001456,
      change24h: -5.2,
      aiSentiment: "看跌",
      riskLevel: "High",
    },
  ]);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">MEME币市场分析</h2>
          </div>
          <span className="text-sm text-muted-foreground">
            实时价格来自 Chainlink
          </span>
        </div>

        <div className="space-y-4">
          {memeTokens.map((token) => (
            <div
              key={token.symbol}
              className="rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium">{token.name}</h3>
                    <span className="text-sm text-muted-foreground">
                      {token.symbol}
                    </span>
                  </div>
                  <p className="mt-1 text-sm">
                    ${token.price.toLocaleString(undefined, {
                      minimumFractionDigits: 8,
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <div
                    className={`flex items-center space-x-1 ${
                      token.change24h >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    <TrendingUp className="h-4 w-4" />
                    <span>{token.change24h}%</span>
                  </div>
                  <div className="mt-1 flex items-center space-x-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        token.riskLevel === "High"
                          ? "bg-red-100 text-red-700"
                          : token.riskLevel === "Medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {token.riskLevel} Risk
                    </span>
                    <span className="text-sm font-medium">
                      AI: {token.aiSentiment}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center space-x-2 rounded-lg bg-muted p-3 text-sm">
                <AlertCircle className="h-4 w-4 text-primary" />
                <p>
                  AI建议：
                  {token.aiSentiment === "看涨"
                    ? "当前市场情绪积极，考虑小仓位参与"
                    : token.aiSentiment === "观望"
                    ? "建议观察市场变化，暂时保持观望"
                    : "当前风险较大，建议等待更好的入场机会"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}