import type { Metadata } from "next";
import { Hero } from "@/components/plug-in-departments/Hero";
import { InteractiveCore } from "@/components/plug-in-departments/InteractiveCore";
import { DepartmentDetail } from "@/components/plug-in-departments/DepartmentDetail";

export const metadata: Metadata = {
  title: "Plug-in Departments",
  description:
    "Plug-in Departments are execution units built around a defined business outcome — Product, Design, Engineering and AI, organized around what needs to ship.",
  alternates: { canonical: "/plug-in-departments" },
  openGraph: {
    title: "Plug-in Departments — Overflow Studio",
    description:
      "Plug-in Departments are execution units built around a defined business outcome.",
    url: "/plug-in-departments",
  },
};

export default function PlugInDepartmentsPage() {
  return (
    <>
      <Hero />
      <InteractiveCore />
      <DepartmentDetail />
    </>
  );
}
