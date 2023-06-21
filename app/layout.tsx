import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Toast from "@/components/Toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Algo Trading in India | Angel One | Alice blue | Zerodha | Master Trust | Paytm | Finvasia",
  description: "Stock trading platform for Indians",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css"
          rel="stylesheet"
        />
      </Head>
      <body suppressHydrationWarning className={inter.className}>
        <Toast />
        <Navbar />
        {children}
        <Footer />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
      </body>
    </html>
  );
}
