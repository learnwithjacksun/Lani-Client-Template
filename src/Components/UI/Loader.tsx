import { LoaderIcon } from "lucide-react"

const Loader = () => {
  return (
    <div className="h-screen center">
        <div className="flex items-center gap-2">
            <LoaderIcon size={22} className="animate-spin text-primary" />
            <span>Loading...</span>
        </div>
    </div>
  )
}

export default Loader