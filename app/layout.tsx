import Link from "next/link";
import "./globals.css";
import MainNav from "./components/MainNav";

export const metadata = {
  title: "Posts App",
  description: "A simple app to manage posts created by Igor Magalhaes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section>
          <MainNav />
        </section>
        <section className="flex justify-center flex-col text-center w-full h-full">
          {children}
        </section>
      </body>
    </html>
  );
}
