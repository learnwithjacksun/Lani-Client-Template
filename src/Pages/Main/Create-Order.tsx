import { Grid } from "@/Components/Main"
import { actions } from "@/Constants/data"
import { MainLayout } from "@/Layouts"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"


const CreateOrder = () => {
  return (
    <>
    <MainLayout title="Create Order" subtitle="Select the type of order you want to make">
<Grid>
{actions.map((action, idx) => (
            <Link
              key={idx}
              to={action.path}
              className="relative space-y-4 border border-line rounded-lg p-4"
            >
              <div className={`bg-primary/10 h-10 w-10 rounded-lg center`}>
                <action.icon size={22} className={`text-2xl text-primary`} />
              </div>
              <p className="font-semibold">{action.label}</p>
              <div className="h-14 w-14 center bg-secondary absolute right-4 top-1/2 -translate-y-1/2  rounded-full">
                <ChevronRight size={25} className="text-muted" />
              </div>
            </Link>
          ))}
</Grid>
    </MainLayout>
    </>
  )
}

export default CreateOrder