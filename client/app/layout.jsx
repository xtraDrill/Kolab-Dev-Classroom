import "./globals.css";
import { Inter, Kanit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Kolab",
  description: "Dev Classroom",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <body className={kanit.className}>
          <Header />
          <Sidebar />
          <main>
            {/* remove bg-charcoal later */}
            <div className="flex items-start justify-center min-h-screen min-w-full bg-orange bg-opacity-30">
              <div className="w-full h-full">{children}</div>
            </div>
          </main>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
