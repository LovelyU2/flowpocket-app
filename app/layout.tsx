export const metadata = {
  title: "FlowPocket",
  description: "AI admin app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
