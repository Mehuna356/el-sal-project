import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Card } from "./ui/Card"
import { TrendingUp } from "lucide-react"

const chartData = [
    { year: '2020', demand: 5 },
    { year: '2023', demand: 25 },
    { year: '2025', demand: 80 },
    { year: '2028', demand: 180 },
    { year: '2030', demand: 320 },
    { year: '2035', demand: 580 },
    { year: '2040', demand: 1200 },
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
                    Global Plastic Finance Gap
                </h3>
                <p className="text-white/50 text-sm">
                    Projected market gap in Billions (USD) by 2040.
                </p>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                        <defs>
                            <linearGradient id="fillDemand" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
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
                                                ${payload[0].value}B Gap
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