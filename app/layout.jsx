export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="toast-root" className="toast-overlay"></div>
        {children}
      </body>
    </html>
  );
}
