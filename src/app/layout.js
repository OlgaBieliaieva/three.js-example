import { Inter } from "next/font/google";
import NavMenu from "@/components/common/navigation/NavMenu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Three.js examples",
  description: "Examples with Three.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <header>
            <NavMenu />
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
