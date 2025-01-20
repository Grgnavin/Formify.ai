import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { pricingPlan } from "@/lib/PricingPlan";
import { PricingPlan } from "@/types/UiTypes";
import { Badge } from "./ui/badge";

const PricingPage = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {pricingPlan.map((x: PricingPlan, idx: number) => (
        <Card key={idx} className="sm:w-[350px] w-full flex flex-col justify-between h-full">
          <CardHeader className="flex flex-row items-center gap-2">
            <CardTitle>{x.level}</CardTitle>
            {
                x.level === "Pro" && (
                    <Badge className="rounded-full bg-orange-600"> Popular</Badge>
                )
            }
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-2xl font-semibold">{x.price}</p>
            <ul className="mt-4">
                {
                    x.services.map((y: string, idx: number) =>(
                        <li key={idx} className="flex items-center gap-2">
                            <span className="">✔</span>
                            {y}
                        </li>
                    ))
                }
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Get Started with {x.level}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PricingPage;
