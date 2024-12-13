import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Support Page - Digitalhat",
  description: "Support contact page of dgtalhat.com",
=======
  title: "Digitalhat - Support Page",
  description: "Digitalhat Support Page",
>>>>>>> ff84c8fbbf2b01cf56039a5d43ed70420ec76e8a
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
