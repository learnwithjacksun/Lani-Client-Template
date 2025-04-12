import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="main center h-screen w-full">
        <div className="space-y-4 text-center">
            <img src="/notfound.svg" alt="notfound" className="w-full object-cover" />
          
            <Link to="/" className="btn-primary btn md:min-w-[200px] mx-auto h-12 rounded-full">Go to Home</Link>
        </div>
    </div>
  )
}

export default Notfound