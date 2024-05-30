import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Oluwaseun Adeniyi",
  description: "personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </head>
      <body className=" min-h-screen flex flex-col">
        <nav className="fixed w-full bg-white z-10">
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
