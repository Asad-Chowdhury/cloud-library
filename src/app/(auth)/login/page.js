import AuthForm from "@/app/components/auth/AuthForm";

export const metadata = {
  title: "Login | Cloud Library",
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
