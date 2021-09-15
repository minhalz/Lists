import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthGuard({ children }) {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      //auth is initialized and there is no user
      if (!session) {
        router.push("/login");
      }
    }
  }, [loading, session, router]);

  /* show loading indicator while the auth provider is still initializing */
  if (loading) {
    return null;
  }

  // if auth initialized with a valid user show protected page
  if (!loading && session) {
    return <>{children}</>;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
}
