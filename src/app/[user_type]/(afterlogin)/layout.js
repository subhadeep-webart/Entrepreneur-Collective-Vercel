import "../../globals.css";
import Footer from "@/components/Layout/Footer";
import AfterLoginHeader from "@/components/Layout/AfterLogin/Header";
import { notFound } from "next/navigation";
import { getUserType } from "@/utils/lib/usertype";
import { UserTypeProvider } from "./UserTypeProvider";


export const metadata = {
  title: "Entrepreneur Collective",
  description: "Entrepreneur Collective Website",
};

export default async function AfterLoginLayout({ children, params }) {
  const resolvedParams = await params;
  const userType = getUserType(resolvedParams.user_type);

  if (!userType) notFound();

  return (
    <>
      <UserTypeProvider userType={userType}>
        <AfterLoginHeader />
        {children}
        <Footer />
      </UserTypeProvider>
    </>
  );
}
