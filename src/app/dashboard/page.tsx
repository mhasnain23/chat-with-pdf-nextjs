import Documents from "@/components/Documents";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
// import Link from "next/link";
const Dashboard = () => {

  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">
        My Document
      </h1>
      <Documents />
    </div>
  );
};
export default Dashboard;
