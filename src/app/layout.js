import "@/app/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
        <body>
            <main>{children}</main>
        </body>
    </html>
  );
}
