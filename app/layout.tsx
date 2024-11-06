import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/globals.css";
// import Script from "next/script";

export const metadata: Metadata = {
  title: "GoBoolean - A Platform To Learn Web Development, Programming, AI and More.",
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

        {/* <!-- Google Tag Manager --> */}
        {/* <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T33D74XD');
          `}
        </Script> */}
        {/* <!-- End Google Tag Manager --> */}

        {/* Google tag (gtag.js) */}
        {/* <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-VG2TJ6N395"
        /> */}

        {/* Google Analytics Integration */}
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-VG2TJ6N395');
          `}
        </Script> */}

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
        {/* Google Tag Manager (noscript) */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T33D74XD"
            height="0" width="0" 
            style={{display:"none",visibility:"hidden"}}
          ></iframe>
        </noscript> */}
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
