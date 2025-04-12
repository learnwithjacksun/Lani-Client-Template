import { MainLayout } from "@/Layouts";
import { CircleCheck, ClockFading, Package } from "lucide-react";
import { Actions, RecentOrders } from "@/Components/Main";

const Dashboard = () => {
  const stats = [
    {
      title: "Active Orders",
      value: 100,
      icon: Package,
      iconColor: "text-blue-500",
      iconColorBg: "bg-blue-500/10",
    },
    {
      title: "Pending Orders",
      value: 0,
      icon: ClockFading,
      iconColor: "text-yellow-500",
      iconColorBg: "bg-yellow-500/10",
    },
    {
      title: "Completed Orders",
      value: 100,
      icon: CircleCheck,
      iconColor: "text-green-500",
      iconColorBg: "bg-green-500/10",
    },
  ];
  return (
    <>
      <MainLayout
        title="Dashboard"
        subtitle="Manage your orders and deliveries"
        isDashboard={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-4 bg-secondary border border-line rounded-lg p-4">
              <p className="text-sm text-muted">{stat.title}</p>
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{stat.value}</h1>
                <div className={`${stat.iconColorBg} h-10 w-10 rounded-lg center`}>
                  <stat.icon className={`${stat.iconColor} text-2xl`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Actions />
        <RecentOrders/>
      </MainLayout>
    </>
  );
};

export default Dashboard;





