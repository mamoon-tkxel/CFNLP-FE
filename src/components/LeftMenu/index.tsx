import { Link } from "react-router-dom";

const SideBar = [
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
      {SideBar.map(({ label, link }) => (
        <Link to={link}>{label}</Link>
      ))}
    </div>
  );
};
