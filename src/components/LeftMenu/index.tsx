import {
  applicationIcon,
  countyIcon,
  dashboardIcon,
  grantIcon,
  reportIcon,
  usersIcon,
} from "@/assets/svgs";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const SIDEBAR = [
  {
    icon: dashboardIcon,
    label: "Dashboard",
    link: "/admin",
    activeLink: ["/admin"],
  },
  {
    icon: grantIcon,
    label: "Grants",
    link: "grants",
    activeLink: ["/admin/grants", "/admin/grants/23/applications"],
  },
  {
    icon: applicationIcon,
    label: "Applications",
    link: "applications",
    activeLink: ["/admin/applications"],
  },

  {
    icon: reportIcon,
    label: "Reports",
    link: "reports",
    activeLink: ["/admin/reports"],
  },
  {
    icon: countyIcon,
    label: "County Profiles",
    link: "county-profiles",
    activeLink: ["/admin/county-profiles"],
  },
  {
    icon: usersIcon,
    label: "Users",
    link: "users",
    activeLink: ["/admin/users"],
  },
];

export const LeftMenu = () => {
  const [active, setActive] = useState(window?.location?.pathname);

  return (
    <Stack
      sx={{
        minHeight: "calc(100vh - 64px)",
        maxWidth: "230px",
        minWidth: "230px",
        backgroundColor: "#ffffff",
      }}
    >
      <List sx={{ padding: "0" }}>
        {SIDEBAR.map((item, index) => (
          <Link
            to={item.link}
            onClick={() => {
              setActive(item.activeLink[0]);
            }}
            className={item?.activeLink.includes(active) ? "active" : ""}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <ListItem
              sx={{
                backgroundColor: item?.activeLink.includes(active)
                  ? "#0C1A75"
                  : "#ffffff",
                color: item?.activeLink.includes(active)
                  ? "#ffffff"
                  : "#5F6269",
                svg: {
                  path: {
                    fill: item?.activeLink.includes(active)
                      ? "#ffffff"
                      : "#5F6269",
                  },
                },
              }}
            >
              <ListItemButton>
                <ListItemIcon sx={{ minWidth: "32px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Stack>
  );
};
