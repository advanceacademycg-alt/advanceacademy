import type { Metadata } from "next";
import { Manrope, Noto_Sans_Devanagari } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
const en=Manrope({subsets:["latin"],variable:"--font-en",display:"swap"});
const hi=Noto_Sans_Devanagari({subsets:["devanagari"],variable:"--font-hi",display:"swap"});
const title="Advance Academy Ambikapur | NEET, JEE, Foundation & PAT Coaching";
const description="Advance Academy Ambikapur provides NEET, JEE, Foundation, Pre B.Sc Nursing and PAT coaching with structured preparation, experienced faculty, regular tests and personal mentorship.";
export const metadata:Metadata={metadataBase:new URL(site.url),title,description,openGraph:{title,description,type:"website",locale:"en_IN",images:[site.logo]},twitter:{card:"summary_large_image",title,description}};
export default function RootLayout({children}:{children:React.ReactNode}){
  const ld={"@context":"https://schema.org","@type":"EducationalOrganization",name:site.name,slogan:site.tagline,telephone:`+91${site.phone}`,url:site.url,
    address:{"@type":"PostalAddress",streetAddress:site.address.slice(0,2).join(", "),addressLocality:"Ambikapur",addressRegion:"Chhattisgarh",addressCountry:"IN"}};
  return <html lang="en" className={`${en.variable} ${hi.variable}`}><body className="font-sans antialiased">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>{children}</body></html>;
}
