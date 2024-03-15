import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "./components";
import { Links } from "./data/link";
import "./globals.css";

const notoSans = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kasshii | Portfolio",
  description: "かっしーのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning={true} className={notoSans.className}>
        <Header links={Links}/>
        <main>{children}</main>
      </body>
    </html>
  );
}
