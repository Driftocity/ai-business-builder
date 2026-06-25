export const metadata = {
  title: "AI Business Builder",
  description: "Generate business ideas instantly"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
