import AuthForm from "@/app/components/auth/AuthForm";

export const metadata = {
  title: "Register | Cloud Library",
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
