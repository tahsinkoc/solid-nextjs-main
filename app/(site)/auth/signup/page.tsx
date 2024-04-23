import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitalhat - Sign Up Page",
  description: "This is Sign Up page for Digitalhat Software Solutions.",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
