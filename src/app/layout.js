export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Filippo Venturini</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}