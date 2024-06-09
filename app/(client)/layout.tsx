import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mamdhooh.com/blog/"),
  // title: "Mamdhooh Moomin Rasheed - Blog",
  title: {
    default: "Mamdhooh Moomin Rasheed - Blog",
    template: '%s | Mamdhooh Moomin Rasheed - Blog'
  },
  description: "Everything is written by me!",
  openGraph: {
    title: "Mamdhooh Moomin Rasheed - Blog",
    description: "Everything is written by me!",
    type: "website",
    locale: "en_US",
    url: "https://mamdhooh.com/blog/",
    siteName: "Mamdhooh Moomin Rasheed"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} h-full bg-amber-50 text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-green-500`}
      >
        <Provider>
          <Navbar />
          <main className="h-full mx-auto max-w-5xl px-6">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
