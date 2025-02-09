"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, useUser } from "@clerk/nextjs";
import { FilePlus2 } from "lucide-react";
import Link from "next/link";
export const Navbar =() => {


  return (
    <div className="flex justify-between bg-white shadow-sm p-5 border-b">
      <div className="flex items-center">
        <Link href="/dashboard" className="text-2xl font-bold">
          Chat <span className="text-purple-600">PDF</span>
        </Link>
      </div>

      <SignedIn>
        <div className="hidden md:flex items-center space-x-2">
          <Button
            variant="ghost"
            asChild
            className="text-gray-700 hover:text-primary transition-colors hidden md:flex"
          >
            <Link href="/dashboard/pricing">Pricing</Link>
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
            <Link href="/dashboard/upload">
              <FilePlus2 className="text-purple-600" />
            </Link>
          </Button>
        </div>
      </SignedIn>
    </div>
  );
};
