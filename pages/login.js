import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/client";
import { useEffect } from "react";
import GoogleButton from "../src/components/Buttons/Google";
import { NextSeo } from "next-seo";

export default function Login() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (session) {
        router.push("/");
      }
    }
  }, [loading, session, router]);

  if (loading) {
    return null;
  }

  return (
    <>
      <NextSeo title="Login" />
      <GoogleButton />
    </>
  );
}

Login.public = true;
