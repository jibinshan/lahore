import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { type Metadata } from "next";
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Tiffin Box",
  description: "lorem",
  icons: [{ rel: "icon", url: "/images/logo.png" }],
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "theme-custom flex min-h-screen bg-[#070707] font-bebas_neue text-[#FBEAD2] antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
