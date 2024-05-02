import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface Option {
  label: string;
  value: string | number;
}

interface CUSTOM_TABS {
  tabs: Option[];
  onChange: (value: string | number) => void;
}

export const CustomTabs = ({ tabs = [], onChange }: CUSTOM_TABS) => {
  const [value, setValue] = React.useState(tabs[0]?.value || "");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        {tabs?.map(({ value, label }, i) => (
          <Tab value={value} label={label} key={i} />
        ))}
      </Tabs>
    </Box>
  );
};
