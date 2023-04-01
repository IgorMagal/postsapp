import "./globals.css";
import MainNav from "./components/nav/MainNav";
import AuthContext from "./auth/AuthContext";
import Nav from "./components/nav/Nav";

export const metadata = {
  title: "Posts App",
  description: "A simple app to manage posts created by Igor Magalhaes",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <MainNav />
          <section className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
            {children}
          </section>
        </AuthContext>
      </body>
    </html>
  );
}
