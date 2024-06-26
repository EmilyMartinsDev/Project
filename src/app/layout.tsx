import type { Metadata } from "next";
// These styles apply to every route in the application
import './globals.css'
import { Providers } from "./providers";
import { fonts } from "./fonts";
import { extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const colors = {
  barber : {
    900: "#12131b",
    400: "#1b1c29",
    100: "#c6c6c6"
  },

  button : {
    cta: "#fba931",
    default: "#FFF",
    gray: "#dfdfdf",
    danger: "ff4040",
  },

  orange: {
    900: "#fba931"
  }
}

const theme = extendTheme({colors})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={fonts.catamaran.variable}>
    <body>
    <AuthProvider>
      <Providers>{children}</Providers>
    </AuthProvider>
    </body>
  </html>
  );
}
