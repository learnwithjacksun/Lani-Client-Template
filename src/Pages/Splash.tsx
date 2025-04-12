import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 5; 
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 100);

    const timeout = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="h-[100dvh] center bg-secondary">
      <div>
        <div className="center px-4 py-2 rounded-xl">
          <img src="/logo-orange.png" alt="logo" width={40} />
          <h3 className="text-3xl text-main font-sora font-bold">Lani</h3>
        </div>

        {/* progress bar */}
        <div className="w-full h-2 bg-background overflow-hidden rounded-full mt-4">
          <div
            style={{ width: `${progress}%` }}
            className="h-full bg-primary rounded-full transition-all duration-100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
