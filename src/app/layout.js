import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Network",
  description: "Network with users across the UK!",
  openGraph: {
    title: "Network",
    description: "Network with users across the UK!",
    type: "website",
    image: "https://www.ovhcloud.com/sites/default/files/styles/desktop_full_width/public/2022-05/network-revised.png", // add an appropriate image to your public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
          
      </html>
    </ClerkProvider>
  );
}
