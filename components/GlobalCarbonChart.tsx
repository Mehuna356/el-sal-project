import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card } from "./ui/Card"
import { TrendingUp } from "lucide-react"

const chartData = [
  { year: '2020', demand: 0.1 },
  { year: '2023', demand: 2 },
  { year: '2026', demand: 15 },
  { year: '2030', demand: 50 },
  { year: '2035', demand: 100 },
  { year: '2040', demand: 160 },
  { year: '2045', demand: 210 },
  { year: '2050', demand: 250 },
]

export function GlobalCarbonChart() {
  return (
    <Card className="w-full h-full bg-background border-border p-6 flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">Market Forecast</span>
        </div>
        <h3 className="text-2xl font-bold text-white">
            Global Voluntary Carbon Market
        </h3>
        <p className="text-white/50 text-sm">
            Projected valuation in Billions (USD) by 2050.
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
                <defs>
                    <linearGradient id="fillDemand" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tickMargin={10} 
                    tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
                />
                <YAxis 
                    hide 
                />
                <Tooltip 
                    content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                        return (
                            <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-3 shadow-xl">
                                <p className="text-white/50 text-xs mb-1">{label}</p>
                                <p className="text-emerald-400 font-bold font-mono">
                                    ${payload[0].value} Billion
                                </p>
                            </div>
                        );
                        }
                        return null;
                    }}
                />
                <Area
                    dataKey="demand"
                    type="monotone"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="url(#fillDemand)"
                    animationDuration={2000}
                />
            </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}