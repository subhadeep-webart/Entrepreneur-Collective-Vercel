import "../globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import AfterLoginHeader from "@/components/Layout/AfterLogin/Header";

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
