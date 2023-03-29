import Link from "next/link";
import "./globals.css";

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
          <nav className="m-4">
            <ul className="flex justify-between">
              <li>
                <Link href="/">PostsApp</Link>
              </li>
              <li className="flex gap-4">
                <Link href="/posts/new">NewPost</Link>
                <Link href="/posts">Posts</Link>
                <Link href="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          {children}
        </section>
      </body>
    </html>
  );
}
