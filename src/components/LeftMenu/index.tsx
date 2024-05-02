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
  },
  {
    icon: grantIcon,
    label: "Grants",
    link: "grants",
  },
  {
    icon: applicationIcon,
    label: "Applications",
    link: "applications",
  },

  {
    icon: reportIcon,
    label: "Reports",
    link: "/",
  },
  {
    icon: countyIcon,
    label: "County Profiles",
    link: "/",
  },
  {
    icon: usersIcon,
    label: "Users",
    link: "/",
  },
];

export const LeftMenu = () => {
  const [active, setActive] = useState(0);
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
              setActive(index);
            }}
            className={active === index ? "active" : ""}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <ListItem
              sx={{
                backgroundColor: active === index ? "#0C1A75" : "#ffffff",
                color: active === index ? "#ffffff" : "#5F6269",
                svg: {
                  path: {
                    fill: active === index ? "#ffffff" : "#5F6269",
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
