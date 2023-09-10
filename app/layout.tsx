import "./globals.css";
import "../public/fonts/fonts.css";
import "../public/css/bootstrap.min.css";
import "../public/css/custom.css";
import "../public/icons/flaticon.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const gtag = process.env.NEXT_PUBLIC_GTAG;

export const metadata: Metadata = {
  title: "Ayaan Siddiqui",
  description:
    "Software Engineer | Building scalable fullstack systems with GraphQL, Angular, and React",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ayaan Siddiqui</title>
        <link rel="icon" href="/images/favicon.ico" />
        <meta
          name="description"
          content="Software Engineer | Building scalable fullstack systems with GraphQL, Angular, and React"
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag}');
          `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BJB4Z9" height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
          }}
        />
      </body>
    </html>
  );
}
