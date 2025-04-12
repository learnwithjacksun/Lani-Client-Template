import { statusColorFormat } from "@/Helpers/statusColorFormat"
import clsx from "clsx"

const OrderCard = () => {
  return (
    <>
     <div className="flex relative bg-secondary border border-line hover:border-primary transition-all duration-300 gap-4 w-full p-4 rounded-xl">
        <div className="h-14 w-14 rounded-md bg-primary center overflow-hidden">
            <img src="/about2.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-medium">Macbook Pro</p>
                    <p className="text-sm text-muted">ID: lani-1234M</p>
                </div>
                <p className={clsx(statusColorFormat("in transit"), "capitalize absolute top-3 right-3")}>in transit</p>
            </div>
            <p className="line-clamp-1 text-muted font-medium text-sm">123 Main Street</p>
        </div>
    </div>
    </>
  )
}

export default OrderCard