import { AuthLayout } from "@/Layouts";
import { Link } from "react-router-dom";
import { UserRoundPlus } from "lucide-react";

const Login = () => {
  return (
    <>
      <AuthLayout
        title="Welcome Back! 🚀"
        subtitle="Fill the form below to login to your account"
      >
        <h1>Login</h1>

        <div className="flex items-center text-sub text-sm center my-6 gap-3">
          <p>Don't have an account?</p>
          <Link
            to="/auth/type"
            className="bg-primary/10 text-primary btn px-4 py-2 rounded-full"
          >
            <UserRoundPlus size={18} />
            <span>Register</span>
          </Link>
        </div>
      </AuthLayout>
    </>
  );
};

export default Login;
