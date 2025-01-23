import { FileText, Zap, Lock, MessageSquare } from "lucide-react";
const features = [
  {
    name: "Quick Summaries",
    description:
      "Get instant summaries of long documents, saving hours of reading time.",
    icon: FileText,
  },
  {
    name: "Smart Chat Interface",
    description:
      "Ask questions and get precise answers from your documents instantly.",
    icon: MessageSquare,
  },
  {
    name: "Lightning Fast",
    description:
      "Process documents in seconds with our optimized AI technology.",
    icon: Zap,
  },
  {
    name: "Secure & Private",
    description: "Your documents are encrypted and securely processed.",
    icon: Lock,
  },
];
export const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to process documents efficiently
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Powerful features to help you understand and analyze documents
            faster than ever.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-200"></div>
              <div className="relative p-6 bg-white border border-gray-200 rounded-lg hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
