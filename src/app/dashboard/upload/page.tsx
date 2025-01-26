"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Upload, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
const CreateDocument = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { toast } = useToast();
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };
  const handleFiles = (files: File[]) => {
    const file = files[0];
    if (!file) return;
    if (!file.type.includes("pdf")) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB
      toast({
        title: "File too large",
        description:
          "Please upgrade to Pro plan to upload files larger than 5MB",
        variant: "destructive",
      });
      return;
    }
    // Handle file upload logic here
    toast({
      title: "Success!",
      description: "Your document has been uploaded",
    });
  };
  return (
    <div className="min-h-screen flex items-center bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Upload Your Document
          </h1>

          <div
            className={`mt-8 flex justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
              isDragging ? "border-primary bg-primary/5" : "border-gray-300"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="text-center">
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 hover:text-primary-hover"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept=".pdf"
                    onChange={handleFileInput}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PDF up to 5MB</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-x-2 text-sm text-gray-600">
            <AlertCircle className="h-4 w-4" />
            <p>
              Free plan limited to 5MB.
              <Button
                variant="link"
                className="text-primary hover:text-primary-hover"
              >
                <Link href={"/pricing"}>Upgrade to Pro</Link>
              </Button>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CreateDocument;
