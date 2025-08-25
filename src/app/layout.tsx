
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CashflowPlanner | 家計キャッシュフローシミュレーター",
  description: "収入・支出・ライフイベントを入力して将来キャッシュフローを可視化。CSV出力対応。",
  openGraph: {
    title: "CashflowPlanner",
    description: "家計のキャッシュフローを可視化する無料ツール",
    siteName: "CashflowPlanner",
    locale: "ja_JP",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
