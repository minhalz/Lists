import "tailwindcss/tailwind.css";
import SiteLayout from "../src/components/SiteLayout";
import { Provider } from "next-auth/client";
import AuthGuard from "../src/components/AuthGuard";
import { FirebaseAppProvider } from "reactfire";
import config from "../src/Firebase/config";
import Firebase from "../src/Firebase";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <FirebaseAppProvider firebaseConfig={config}>
      <Firebase>
        <Provider session={session}>
          <SiteLayout>
            <DefaultSeo titleTemplate="%s | Lists" />
            {Component.public ? (
              <Component {...pageProps} />
            ) : (
              <AuthGuard>
                <Component {...pageProps} />
              </AuthGuard>
            )}
          </SiteLayout>
        </Provider>
      </Firebase>
    </FirebaseAppProvider>
  );
}

export default MyApp;
