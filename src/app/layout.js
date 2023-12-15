import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "@/components/Provider";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata() {
 
  return {
    title: "News project in NEXT.JS",
    description: "I am a highly motivated and detail-oriented software engineer with a passion for creating efficient, scalable, and maintainable software solutions. With 2 years of experience in the field, I have a proven track record of delivering high-quality code within challenging deadlines. My expertise lies in MERN Stack and NEXT.JS, and I am well-versed in the entire software development life cycle. I excel in problem-solving and thrive in dynamic and collaborative team environments.",
    openGraph: {
      images: "https://raw.githubusercontent.com/developer-mezbah/next-news/main/public/preview.png?token=GHSAT0AAAAAACHT5MOOZ4XIOKBHSUQQFNTGZL4NDCA",
    },
  }
}
 


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <Navbar />
          <NextTopLoader color="#269669" height={3} speed={200} />
          <div className="lg:ml-[15%] ml-0 pb-[120px] lg:pb-0 lg:pt-16 md:mt-10 mt-5 px-3">
            {children}
          <Footer/>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
