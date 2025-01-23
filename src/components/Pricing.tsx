import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our service",
    features: [
      "Up to 5MB PDF files",
      "3 documents per month",
      "Basic summaries",
      "Standard support",
    ],
  },
  {
    name: "Pro",
    price: "$5",
    description: "For professionals and small teams",
    features: [
      "Up to 25MB PDF files",
      "Unlimited documents",
      "Advanced summaries",
      "Priority support",
      "Custom AI models",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited file size",
      "Unlimited documents",
      "Custom features",
      "24/7 support",
      "API access",
      "Custom deployment",
    ],
  },
];
export const Pricing = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-base font-medium text-gray-500">
                      /month
                    </span>
                  )}
                </p>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={tier.name === "Pro" ? "default" : "outline"}
                className="w-full"
              >
                {tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
