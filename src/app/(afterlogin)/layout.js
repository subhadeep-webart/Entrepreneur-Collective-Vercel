import "../globals.css";
import Footer from "@/components/Layout/Footer";
import AfterLoginHeader from "@/components/Layout/AfterLogin/Header";


export const metadata = {
    title: "Entrepreneur Collective",
    description: "Entrepreneur Collective Website",
};

export default function AfterLoginLayout({ children }) {
    return (
        <>
            <AfterLoginHeader/>
            {children}
            <Footer />
        </>
    );
}
