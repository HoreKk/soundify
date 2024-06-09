import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import localFont from "next/font/local";

export const Satoshi = localFont({
  src: [
    {
      path: "../styles/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../styles/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Soundify",
  description: "Redisigned Spotify clone",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Satoshi.className}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
