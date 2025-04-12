

interface GridProps {
  children: React.ReactNode;
  className?: string;
}
const Grid = ({ children, className }: GridProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default Grid