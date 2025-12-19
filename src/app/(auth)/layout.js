import Header from "@/components/Layout/Header";

export const metadata = {
    title: "Entrepreneur Collective",
    description: "Entrepreneur Collective Website",
};

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
