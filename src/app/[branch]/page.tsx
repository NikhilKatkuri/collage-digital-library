"use client";
import branches from "@/data/branches";
import { useParams, notFound } from "next/navigation";

export default function BranchPage() {
  const params = useParams();
  const branchParam = params.branch?.toString().toUpperCase();

  const branch = branches.find(
    (b) => b.abbreviation.toUpperCase() === branchParam
  );

  if (!branch) return notFound();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{branch.name}</h1>
      <p>Welcome to the {branch.abbreviation} resources page.</p>
    </div>
  );
}
