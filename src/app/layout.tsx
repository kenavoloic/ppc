import type { Metadata } from 'next';
import { Inter as FontSans} from 'next/font/google';
import './globals.css';
import {ThemeProvider} from "@components/theme-provider";
import {EtatsContextProvider} from "@components/etatsProvider";
import Barre from "@components/barre";
import { cn }  from "@lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Pierre, papier, ciseaux',
  description: 'Chifoumi',
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
      <Barre />
	  <main className="container w-full min-h-screen mb-4 flex flex-col justify-between items-center">{children}</main>
    </EtatsContextProvider>
  </ThemeProvider>
</body>
    </html>
  )
}
