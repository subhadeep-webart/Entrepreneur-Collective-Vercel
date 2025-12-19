import { PUBLIC_IMAGES } from "@/assets";
import AuthFormWrapper from "@/components/auth/AuthFormWrapper";
import BannerImageMask from "@/components/shared/BannerImageMask";
import AuthPageWrapper from "@/components/shared/Wrapper/AuthPageWrapper";
import LoginForm from "@/components/ui/Forms/LoginForm";

const LoginPage = () => {
  return (
    <AuthPageWrapper>
      <div className="w-full container flex items-end h-screen gap-32">
        <div className="w-full h-full flex items-end justify-start !pb-11">
          <AuthFormWrapper headerText="Let’s get you signed in">
            <LoginForm />
          </AuthFormWrapper>
        </div>
        <BannerImageMask image={PUBLIC_IMAGES?.BannerImage} />
      </div>
    </AuthPageWrapper>
  );
};

export default LoginPage;
