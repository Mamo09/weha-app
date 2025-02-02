import type { Metadata } from "next";
import Header from './components/header';  
import Footer from './components/footer';  
import { Roboto, Fira_Code} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "100"
});  
  

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Weha-Project",
  description: "Membuat website",
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${firaCode.variable} antialiased`}
      >
        <Header />  
        <main className="container mx-auto p-4">{children}</main> 
        <Footer />  
      </body>
    </html>
  );
}
