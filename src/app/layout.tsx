import type { Metadata } from 'next';
import { Inter as FontSans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from "@components/theme-provider";
import {EtatsContextProvider} from "@components/etatsProvider";
import { cn }  from "@lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: 'Pierre, papier, ciseaux',
    description: 'Chifoumi',
    //themeColor: [{media: "(prefers-color-scheme: dark)", color: "#fff"}],
    //viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, prefers-color-scheme=dark, color=#fff"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
	  <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
  <ThemeProvider attribute="class" defaultTheme="System" enableSystem disabledTransitionOnChange >
    <EtatsContextProvider>
	  {children}
    </EtatsContextProvider>
  </ThemeProvider>
      </body>
    </html>
  )
}
