import "./globals.css";
import {
    archivo,
    archivoBlack,
    bebasNeue,
    bricolageGrotesque,
    clashDisplay,
    helvetica,
    nunitoSans,
    oxanium,
} from "@/fonts";
import HOC from "@/components/shared/hoc";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/navbar/Navbar";

export const metadata = {
    title: "HACKNOVA 2025",
    description:
        "CODE. CREATE. CONQUER. | HACKNOVA 2025 - A Programmer's Day Hackathon organized by STACS at NSS College of Engineering, Palakkad — an event dedicated to fostering innovation and problem-solving.",
    image: "",
    url: "https://stacs.nssce.ac.in/",
    keywords: [
        "HACKNOVA",
        "HACKNOVA 2025",
        "Hackathon",
        "NSS College of Engineering",
        "STACS",
        "Palakkad",
        "Programmer's Day",
        "student hackathon",
        "hackathon in kerala",
        "hackathon in india",
    ],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "HACKNOVA 2025",
    image: "",
    description:
        "CODE. CREATE. CONQUER. | HACKNOVA 2025 - A Programmer's Day Hackathon organized by STACS at NSS College of Engineering, Palakkad — an event dedicated to fostering innovation and problem-solving.",
};
export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=G-MLP0HVXXM9"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MLP0HVXXM9', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
                <link
                    rel="icon"
                    href="/Images/cover.png"
                    type="image/x-icon"
                    sizes="any"
                ></link>
                <meta property="og:title" content="HACKNOVA 2025" />
                <meta property="og:url" content="https://stacs.nssce.ac.in/" />
                <meta
                    property="og:image"
                    content=""
                />
                <meta name="twitter:title" content="HACKNOVA 2025" />
                <meta
                    name="twitter:description"
                    content="HACKNOVA 2025 | CODE. CREATE. CONQUER. | Programmer's Day Hackathon at NSS College of Engineering, Palakkad | Participate and Win Prizes."
                />
                <meta
                    name="twitter:image"
                    content=""
                />
                <meta
                    name="twitter:card"
                    content=""
                />
            </head>
            <body
                className={`${archivo.variable} ${archivoBlack.variable} ${bebasNeue.variable} ${bricolageGrotesque.variable} ${clashDisplay.variable} ${helvetica.variable} ${oxanium.variable} ${nunitoSans.variable} antialiased`}
            >
                <Toaster position="top-right" />
                <Navbar />
                <HOC>{children}</HOC>
                <Footer />
            </body>
        </html>
    );
}
