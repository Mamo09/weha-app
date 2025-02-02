import type { Metadata } from "next";
import Navbar from './components/navbar';  
import Footer from './components/footer';  
import { Noto_Serif_Toto, Noto_Sans_Palmyrene } from 'next/font/google';
import "./globals.css";  
  
// const ebGaramond = EB_Garamond({  
//   variable: "--font-eb-garamond",
//   subsets: ["latin"], 
//   weight: "400"
// });  
  

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const notoSerifToto = Noto_Serif_Toto({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: '400', // Sesuaikan weight yang diperlukan
});

const notoSansPalmyrene = Noto_Sans_Palmyrene({
  subsets: ['latin'],
  variable: '--font-body',
  weight: '400', // Sesuaikan weight yang diperlukan
});

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
      <link rel="icon" href="/assets/img/wehalogo.png" type="image/png"></link>
      <body
        className={`${notoSerifToto.variable} ${notoSansPalmyrene.variable}`}>
        <Navbar />  
        <main>{children}</main> 
        <Footer />  
      </body>
    </html>
  );
}

