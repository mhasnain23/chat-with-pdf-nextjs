import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">ChatPDF</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/documents"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              My Documents
            </Link>
            <Link
              href="/create"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Create Document
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant={"default"}>Sign In</Button>
            <Button variant={"secondary"}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
