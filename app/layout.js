import Head from "./head";

import "../styles/global.css"

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <Head />
        <body>{children}</body>
      </html>
    );
  }