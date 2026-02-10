import "../globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Entrepreneur Collective",
  description: "Entrepreneur Collective Website",
};

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
