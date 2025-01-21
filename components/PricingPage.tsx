import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { pricingPlan } from "@/lib/PricingPlan";
import { PricingPlan } from "@/types/UiTypes";
import { Badge } from "./ui/badge";

const PricingPage = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="font-bold text-4xl tracking-tight text-gray-800 dark:text-white">
          Plans and Pricing
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto dark:text-white">
          Choose a plan that suits your needs & Pay early to enjoy unlimited credits and exclusive features.
        </p>
      </div>
    <div className="grid grid-cols-3 gap-5">
      {pricingPlan.map((x: PricingPlan, idx: number) => (
        <Card
        key={idx}
          className={`sm:w-[350px] w-full flex flex-col justify-between dark:border dark:border-gray h-full hover:scale-105 transition-transform ${
            x.level === "Enterprise"
            ? "bg-[#1c1c1c] text-white"
            : x.level === "Pro"
            ? "bg-[#e3f6f5] border-[#28b6b6] text-[#126666] shadow-md"
            : ""
            }`}
            >
          <CardHeader className="flex flex-row items-center gap-2">
            <CardTitle>{x.level}</CardTitle>
            {x.level === "Pro" && (
              <Badge className="rounded-full bg-[#28b6b6] text-white">Popular</Badge>
            )}
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-2xl font-semibold">{x.price}</p>
            <ul className="mt-4">
              {x.services.map((y: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>✔</span>
                  {y}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className={`w-full dark:border dark:border-gray ${
                x.level === "Enterprise"
                ? "text-black dark:text-white"
                : x.level === "Pro"
                ? "border-[#28b6b6] text-[#126666] dark:text-white"
                : ""
                }`}
                >
              Get Started with {x.level}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
      </div>
  );
};

export default PricingPage;
