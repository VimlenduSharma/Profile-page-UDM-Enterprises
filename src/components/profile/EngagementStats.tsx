import React from 'react'; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface EngagementStatsProps {
  platform: string;
  rate: number;
}

export function EngagementStats({ platform, rate }: EngagementStatsProps) {
  const getColorByRate = (rate: number) => {
    if (rate >= 75) return "text-green-600";
    if (rate >= 50) return "text-emerald-600";
    if (rate >= 25) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-gray-900">{platform} Engagement Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-2 flex items-center justify-between">
          <span className={`text-2xl font-bold ${getColorByRate(rate)}`}>{rate}%</span>
          <span className="text-sm text-gray-500">
            {rate >= 75 ? "Excellent" : 
             rate >= 50 ? "Good" : 
             rate >= 25 ? "Average" : 
             "Needs Improvement"}
          </span>
        </div>
        <Progress value={rate} className="h-2" />
        <p className="mt-4 text-sm text-gray-600">
          {rate >= 75 ? "Outstanding engagement! Your content is resonating very well with your audience." :
           rate >= 50 ? "Good engagement. Your content is performing well above average." :
           rate >= 25 ? "Average engagement. There's room for improvement in your content strategy." :
           "Your engagement needs work. Consider revising your content strategy."}
        </p>
      </CardContent>
    </Card>
  );
}
