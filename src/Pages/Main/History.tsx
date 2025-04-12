import { Grid, OrderCard } from "@/Components/Main";
import { Search } from "@/Components/UI";
import { MainLayout } from "@/Layouts";
import clsx from "clsx";
import { useState } from "react";


const History = () => {
  const filters = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Pending",
      value: "pending",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "In Transit",
      value: "in-transit",
    },
  ];
  const [activeFilter, setActiveFilter] = useState(filters[0].value);
  const [search, setSearch] = useState("");
  return (
    <>
      <MainLayout
        title="History"
        subtitle="Explore all the orders you have made on this platform so far"
      >
        <div className="space-y-2">
            <Search search={search} setSearch={setSearch} />

            <div className="flex gap-2">
                {filters.map((filter) => (
                    <div key={filter.value} className={clsx("text-xs font-medium cursor-pointer text-muted px-4 py-2 rounded-lg border border-line", {
                        "bg-primary text-white border-transparent": activeFilter === filter.value,
                    })} onClick={() => setActiveFilter(filter.value)}>
                        {filter.label}
                    </div>
                ))}
            </div>
        </div>

        <Grid>
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </Grid>
      </MainLayout>
    </>
  );
};

export default History;
