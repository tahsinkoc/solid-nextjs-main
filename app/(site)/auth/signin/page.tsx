import Signin from "@/components/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digitalhat - Login Page",
  description: "This is Login page for Digitalhat Software Solutions.",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <Signin />
    </>
  );
};

export default SigninPage;
