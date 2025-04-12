import { AuthLayout } from "@/Layouts";
import { Circle, CircleCheck, Loader } from "lucide-react";
import clsx from "clsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

const Type = () => {
  const accountTypes = ["personal", "business"];
  const [selectedAccountType, setSelectedAccountType] = useState<string | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!selectedAccountType) {
      toast.error("Please select an Account Type!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/auth/register", { state: { type: selectedAccountType } });
    }, 1000);
  };
  return (
    <>
      <AuthLayout
        title="Account Type 💁‍♂️"
        subtitle="Choose the type of account you want to create"
      >
        <div className="flex flex-col gap-4">
          {accountTypes.map((type) => (
            <div
              key={type}
              onClick={() => setSelectedAccountType(type)}
              className={clsx(
                "flex items-center gap-2 p-4 rounded-xl text-sm font-sora bg-secondary border border-line cursor-pointer",
                selectedAccountType === type && "border-primary"
              )}
            >
              {selectedAccountType === type ? (
                <CircleCheck size={20} className="text-primary" />
              ) : (
                <Circle size={20} className="text-muted" />
              )}
              <p className="capitalize">{type}</p>
            </div>
          ))}
        </div>

        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className="btn-primary w-full h-10 rounded-full mt-6"
        >
          {isLoading ? <Loader className="animate-spin" /> : "Continue"}
        </button>
      </AuthLayout>
    </>
  );
};

export default Type;
