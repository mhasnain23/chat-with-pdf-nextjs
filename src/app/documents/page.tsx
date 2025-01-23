import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";
import Link from "next/link";
const Documents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Documents</h1>
          <Link href="/create">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> New Document
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Empty state */}
          <div className="col-span-full flex flex-col items-center justify-center p-12 text-center">
            <FileText className="h-12 w-12 text-purple-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              No documents yet
            </h3>
            <p className="mt-2 text-gray-600">
              Get started by creating a new document
            </p>
            <Link href="/create">
              <Button className="mt-6" variant={"secondary"}>
                Create Document
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Documents;
