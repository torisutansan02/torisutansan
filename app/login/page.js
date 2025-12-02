"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { auth0 } from "@/lib/auth0";

export default async function LoginPage() {
  const session = await auth0.getSession();
  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="text">
        <h1 className="heading">Login</h1>
        <p className="pretty">
          Please click the button below to login. Logging in allows access to
          personal blog posts.
        </p>

        <a
          href="/auth/login"
          className="bg-zinc-700 hover:bg-gray-900 p-4 m-4 rounded-md flex w-40 text-center justify-center mx-auto text-white"
        >
          Login
        </a>
      </div>

      <Footer />
    </>
  );
}
