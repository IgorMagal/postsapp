import "./globals.css";
import MainNav from "./components/MainNav";
import AuthContext from "./components/AuthCtx";

export const metadata = {
  title: "Posts App",
  description: "A simple app to manage posts created by Igor Magalhaes",
};
// This is the layout that will be used in all pages
// It will be rendered as a child of the <Page> component
// So you can use the `usePage()` hook to access the metadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
