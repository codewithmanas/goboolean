import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "GoBoolean",
  description: "A Platform To Learn Web Development, Programming, AI and More.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
