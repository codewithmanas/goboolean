import type { Metadata } from "next";
import "../styles/tailwind.css";
import "../styles/globals.css";
import Script from "next/script";
// import { Toaster } from "@/components/ui/toaster";
import { Toaster } from 'react-hot-toast';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://goboolean.in'),
  title:
    "GoBoolean - A Platform To Learn Web Development, Programming, AI and More",
  description:
    "GoBoolean is an educational platform that offers tutorials and resources on Web Development, Programming, Artificial Intelligence, and more to help you excel in the tech industry.",
  keywords: [
    "web development",
    "programming",
    "AI",
    "GoBoolean",
    "tech learning platform",
    "coding quizzes",
    "project ideas",
  ],
  authors: [{ name: "GoBoolean Team" }],
  icons: {
    icon: [
      { url: "/icon-dark.svg", type: "image/svg+xml" },
      { url: "/icon-dark.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/icon-dark.jpeg",
  },
  openGraph: {
    title:
      "GoBoolean - A Platform To Learn Web Development, Programming, AI and More",
    description:
      "Join GoBoolean to learn the latest in Web Development, Programming, and AI. Start your journey towards tech mastery today!",
    url: "https://goboolean.in",
    siteName: "GoBoolean",
    images: [
      {
        url: "/icon-dark.jpeg",
        width: 1200,
        height: 630,
        alt: "GoBoolean Logo",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "GoBoolean - A Platform To Learn Web Development, Programming, AI and More",
    description:
      "Join GoBoolean to explore web development, programming, AI, and tech tips.",
    images: ["/icon-dark.jpeg"],
    site: "@goboolean",
    creator: "@goboolean",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://goboolean.in",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* <!-- Google Tag Manager --> */}
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />

        {/* Google Analytics Integration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        {/* MS Clarity Integration */}
        <Script strategy="afterInteractive" id="ms-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0" width="0" 
            style={{display:"none",visibility:"hidden"}}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="min-h-screen bg-blue-950 text-white">
          <Header />
          {children}
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  );
}
