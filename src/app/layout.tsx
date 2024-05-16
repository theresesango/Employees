import type { Metadata } from "next";
import "./../styles/globals.scss";

export const metadata: Metadata = {
  title: "My empolyees",
  description: "Meet the perfect team! Explore profiles of top employees, showcasing their skills, expertise, and what makes our team exceptional. Find the best fit for your needs!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
			<a href="#main" className="skip-to-main-content-link">Skip to main content</a>
				{children}
			</body>
    </html>
  );
}
