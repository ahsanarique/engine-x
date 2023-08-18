import { ReactNode } from "react";
import { Link } from "react-router-dom";

type navItemProps = {
  routeLink: string;
  title: string;
  selected: boolean;
  icon: ReactNode;
};

const TopNavItem = ({
  routeLink,
  title,
  selected,
  icon,
}: navItemProps) => {
  return (
    <div className="col-6">
      <Link to={routeLink}>
        <div
          className={`topNav-item ${selected ? "border-bottom active" : ""}`}
        >
          <div className="d-inline-flex align-items-center">
            <span>{icon}</span>
            <span className="ps-2">{title}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopNavItem;
