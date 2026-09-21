import type { Metadata } from "next";
import { connection } from "next/server";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Zirey — a personal corner of the internet", template: "%s | Zirey" },
  description: "Zirey’s personal workbench: aerospace ambitions, software projects, hardware experiments, cybersecurity, and field notes.",
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  await connection();
  return <html lang="en"><body>{children}</body></html>;
}
