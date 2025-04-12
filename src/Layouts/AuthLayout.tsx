import { Header } from "@/Components/Auth"
const AuthLayout = ({children,title,subtitle}:{children:React.ReactNode,title:string,subtitle:string}) => {
  return (
    <>
    <Header/>
    <main className="layout">
    <div className="mb-8">
          <h1 className="text-2xl font-bold capitalize font-sora text-main mb-2 mt-6">{title}</h1>
          {subtitle && <p className="text-muted text-sm">{subtitle}</p>}
        </div>
        <main className="pb-10">{children}</main>
    </main>
    </>
  )
}

export default AuthLayout