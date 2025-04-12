import { Link } from "react-router-dom";

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
  link?: string;
  linkText?: string;
}

const Box = ({ children, title, link, linkText }: ContainerProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted">{title}</h3>
        {link && (
          <Link to={link} className="text-sm text-muted">
            {linkText}
          </Link>
        )}
      </div>
      <div className="relative mt-4">
        <div className="space-y-4">{children}</div>
      </div>
    </>
  );
};

export default Box;
