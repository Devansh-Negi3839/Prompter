import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Suspense } from "react";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div>
            <Suspense>
              <div>
                <main className="app">
                  <Nav />
                  {children}
                </main>
              </div>
            </Suspense>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
