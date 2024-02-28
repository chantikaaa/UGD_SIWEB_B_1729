import '@/app/ui/global.css';
import { kanit } from './ui/fonts';
import { anton } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} ${anton.className} antialiased`}>{children}</body>
    </html>
  );
}