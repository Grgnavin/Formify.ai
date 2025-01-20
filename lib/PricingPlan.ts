import { PricingPlan } from "@/types/UiTypes";

export const pricingPlan: PricingPlan[] = [
    {
        level: "Free",
        price: "$0/month",
        services: [
            "3 free Credits",
            "Basics Supports",
            "Limited Features",
            "Community Access"
        ]
    },
    {
        level: "Pro",
        price: "$29/month",
        services: [
            "Unlimited Credits",
            "Basics Supports",
            "Limited Features",
            "Community Access"
        ]
    },
    {
        level: "Enterprise",
        price: "$99/month",
        services: [
            "Unlimited Credits",
            "Basics Supports",
            "Limited Features",
            "Community Access",
            "Monthly updates"
        ]
    },
]