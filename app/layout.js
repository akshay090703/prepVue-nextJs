import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "PrepVue",
  description: "AI automated Mock Interview preparation platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <>
          <Toaster />
          <body className={inter.className}>{children}</body>
        </>
      </html>
    </ClerkProvider>
  );
}
