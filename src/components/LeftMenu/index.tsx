import { Link } from "react-router-dom";

const SIDEBAR = [
  {
    icon: "icon",
    label: "Dashboard",
    link: "/admin",
  },
  {
    icon: "icon",
    label: "Grants",
    link: "grants",
  },
  {
    icon: "icon",
    label: "Applications",
    link: "/",
  },

  {
    icon: "icon",
    label: "Reports",
    link: "/",
  },
  {
    icon: "icon",
    label: "County Profiles",
    link: "/",
  },
  {
    icon: "icon",
    label: "Users",
    link: "/",
  },
];

export const LeftMenu = () => {
  return (
    <div>
      {SIDEBAR.map(({ label, link }) => (
        <li>
          <Link to={link}>{label}</Link>
        </li>
      ))}
    </div>
  );
};
