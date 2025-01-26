import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Hero = () => {
  return (
    <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-purple-600 sm:text-5xl md:text-6xl">
            <span className="block">Chat with your PDFs using</span>
            <span className="block text-primary">Advanced AI Summarizer</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            Transform the way you read documents. Our AI-powered solution helps
            you understand, summarize, and extract insights from your PDFs
            instantly.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Button asChild size="lg" variant={"secondary"}>
              <Link href={"/dashboard"}>Get Started</Link>
            </Button>
            {/* <Button variant={"default"} size="lg">
              See How it Works
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
