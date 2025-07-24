import "./globals.css";

export const metadata = {
  title: "Nikhil Reddy",
  icons: {
    icon: "/nr_favicon.ico",
  },
  description: "Personal website built with Next.js and Tailwind CSS"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#02040A] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
