"use client";

import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import { FilePlus2 } from "lucide-react";
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

          <SignedIn>
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="ghost"
                asChild
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Link href="/">Pricing</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Link href="/dashboard">My Documents</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                <Link href="/upload">
                  <FilePlus2 className="text-purple-600" />
                </Link>
              </Button>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
