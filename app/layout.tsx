import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/globals.css";
// import Script from "next/script";

export const metadata: Metadata = {
  title: "GoBoolean",
  description: "A Platform To Learn Web Development, Programming, AI and More.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* MS Clarity Integration */}
      {/* <Script strategy="beforeInteractive" id="ms-clarity">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "osw4s6wgxo");
        `}
      </Script> */}
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
