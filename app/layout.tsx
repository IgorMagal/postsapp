import "./globals.css";
import MainNav from "./components/nav/MainNav";
import AuthContext from "../pages/api/auth/AuthContext";
import QueryWrapper from "./components/QueryWrapper";

export const metadata = {
  title: "Posts App",
  description: "A simple app to manage posts created by Igor Magalhaes",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryWrapper>
          <AuthContext>
            {/* @ts-expect-error Server Component */}
            <MainNav />
            <section className="w-auto h-auto flex flex-col justify-start items-center m-2">
              {children}
            </section>
          </AuthContext>
        </QueryWrapper>
      </body>
    </html>
  );
}
