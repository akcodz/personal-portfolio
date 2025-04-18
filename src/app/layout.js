import { Fira_Code, Spicy_Rice } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScrollProvider from "@/components/smoothScrollProvidor";
import Cursor from "@/components/cursor";
import Background from "@/components/background";

const spicyRice = Spicy_Rice({
  variable: "--font-spicy-rice",
  weight: "400",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata = {
  title: "Akash | Full-Stack Developer",
  description:
    "Portfolio of Akash – MERN stack developer focused on scalable apps and clean UI/UX.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "JavaScript",
  ],
  authors: [{ name: "Akash" }],
  creator: "Akash",
  publisher: "Akash",
  openGraph: {
    title: "Akash | Full-Stack Developer",
    description:
      "Showcasing full-stack projects, real-time apps, and modern web solutions.",
    siteName: "Akash Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash | Full-Stack Developer",
    description:
      "Discover professional web development projects and scalable applications by Akash.",
  },
  category: "Technology",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spicyRice.variable} ${firaCode.variable}  antialiased relative min-h-screen w-full bg-[#121212] `}
      >
        <Background />
        <Navbar />
        <Cursor/>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        
      </body>
    </html>
  );
}
