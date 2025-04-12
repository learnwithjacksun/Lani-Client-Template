import { AuthLayout } from "@/Layouts";
import { Input } from "@/Components/UI";
import { RefreshCcw, Mail, Loader, UserRoundPlus, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  return (
    <>
      <AuthLayout
        title="Welcome Back! 🚀"
        subtitle="Fill the form below to login to your account"
      >
        <form className="space-y-4">
          <Input
            label="Email or Business Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            icon={<Mail size={18} />}
            styles="bg-secondary placeholder:normal-case lowercase"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            icon={<Lock size={18} />}
            styles="bg-secondary"
          />

          <div className="flex items-center justify-between">
            <div className="font-semibold capitalize text-primary text-sm">
              Forgot your password?
            </div>
            <Link
              to="/reset"
              className="bg-primary/10 text-primary btn items-center flex px-4 py-2 rounded-full"
            >
              <RefreshCcw size={18} />
              <span>Reset</span>
            </Link>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full btn bg-primary text-white px-4 h-10 rounded-full"
          >
            {loading ? <Loader className="animate-spin" size={18} /> : "Login"}
          </button>
        </form>

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
