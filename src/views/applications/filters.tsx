import { exportIcon, filterIcon, sortingIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack } from "@mui/material";
import { SearchBox } from "@/components/Search/searchBox";

export const ApplicationFilters = () => {
  return (
    <Stack
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      paddingX="24px"
    >
      <Stack
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        gap="10px"
      >
        <SearchBox />
        <ButtonComponent
          startIcon={filterIcon}
          text="Filter"
          variant="outlined"
          className="h-40 clr-gray-500 border-clr-gray-300"
        />
      </Stack>

      <Stack
        display="flex"
        justifyContent="space-between"
        flexDirection="row"
        gap="8px"
      >
        <ButtonComponent
          startIcon={exportIcon}
          text="Export"
          variant="outlined"
          className="h-40 clr-gray-500 border-clr-gray-300"
        />
        <ButtonComponent
          startIcon={sortingIcon}
          text="Sort by:Title"
          variant="outlined"
          className="h-40 clr-gray-500 border-clr-gray-300"
          sx={{
            svg: {
              path: {
                fill: "#5F6269",
              },
            },
          }}
        />
      </Stack>
    </Stack>
  );
};
