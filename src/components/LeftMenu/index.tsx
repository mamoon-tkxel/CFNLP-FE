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
    activeLink: "/admin",
  },
  {
    icon: grantIcon,
    label: "Grants",
    link: "grants",
    activeLink: "/admin/grants",
  },
  {
    icon: applicationIcon,
    label: "Applications",
    link: "applications",
    activeLink: "/admin/applications",
  },

  {
    icon: reportIcon,
    label: "Reports",
    link: "/",
    activeLink: "/admin/reports",
  },
  {
    icon: countyIcon,
    label: "County Profiles",
    link: "/",
    activeLink: "/admin/county",
  },
  {
    icon: usersIcon,
    label: "Users",
    link: "/",
    activeLink: "/admin/user",
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
              setActive(item.activeLink);
            }}
            className={active === item?.activeLink ? "active" : ""}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <ListItem
              sx={{
                backgroundColor:
                  active === item?.activeLink ? "#0C1A75" : "#ffffff",
                color: active === item?.activeLink ? "#ffffff" : "#5F6269",
                svg: {
                  path: {
                    fill: active === item?.activeLink ? "#ffffff" : "#5F6269",
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
