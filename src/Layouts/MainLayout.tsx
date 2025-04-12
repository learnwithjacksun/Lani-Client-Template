import { Header, Sidebar } from "@/Components/Main";
interface MainLayoutProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  isDashboard?: boolean;
}

const MainLayout = ({
  title,
  subtitle,
  children,
  isDashboard = false,
}: MainLayoutProps) => {
  return (
    <div className="flex h-[100dvh] overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto hide-scrollbar">
        <Header isDashboard={isDashboard} />
        <div>
            {title && (
              <div className="w-[90%] mx-auto mt-6">
                <h3 className="text-2xl font-bold">{title}</h3>
                {subtitle && <p className="text-muted">{subtitle}</p>}
              </div>
            )}
            <div className="w-[90%] mx-auto pb-10 mt-6 space-y-4">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
