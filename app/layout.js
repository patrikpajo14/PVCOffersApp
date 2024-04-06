import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "@/styles/globals.css";
import QueryProvider from "./context/QueryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <ToasterContext />
            <main className="main w-[100%] h-[100%]">{children}</main>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
