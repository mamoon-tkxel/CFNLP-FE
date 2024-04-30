import { addIcon, exportIcon, filterIcon, sortingIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";
import DataTable from "@/components/DataTable";
import { PaginationType } from "@/constants/types";
import { useState } from "react";
import { SearchBox } from "@/components/Search/searchBox";
import CreateGrant from "./createGrant";
import SideDrawer from "@/components/Drawer";

const data = [
  {
    title: "Banteay Sre",
    status: "active",
    contact: "John Smith",
    appliedDate: "2024-04-04",
  },
  {
    title: "Banteay Sre",
    status: "active",
    contact: "John Smith",
    appliedDate: "2024-04-04",
  },
];

const Grants = () => {
  const [pagination] = useState<PaginationType>({
    rowsPerPage: 10,
    page: 1,
    totalRecords: 16,
  });

  const [openDrawer, closeDrawer] = useState(false);

  const columns = [
    { key: "title", label: "Organization & County" },
    { key: "contact", label: "Contact Person" },
    { key: "appliedDate", label: "Applied on" },
    { key: "status", label: "Status" },
  ];

  const tableSetting = {
    hideActionColumn: false,
    showActionRow: false,
    showRowCheckboxes: true,
    showColumnCheckbox:true
  };

  return (
    <>

    <Stack
    gap="24px"
    >

      <Stack
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      alignItems="center"
      >
        <Typography className="f-20 lh-23 f-w-800">Grants</Typography>
        <ButtonComponent startIcon={addIcon} className="bg-clr-primary-blue-700 clr-white" text="Add Grant"/>
      </Stack>    
      <Stack
      borderRadius="24px"
      gap="24px"
      sx={{
        backgroundColor:"#FFFFFF"
      }}
      paddingY="24px"
      >
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
          <SearchBox/>
          <ButtonComponent startIcon={filterIcon} text="Filter" variant="outlined" className="h-40 clr-gray-500 border-clr-gray-300"/>
          </Stack>
          
          <Stack
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          gap="8px"
          >
          <ButtonComponent startIcon={exportIcon} text="Export" variant="outlined" className="h-40 clr-gray-500 border-clr-gray-300"/>
          <ButtonComponent startIcon={sortingIcon} text="Sort by:Title" variant="outlined" className="h-40 clr-gray-500 border-clr-gray-300" 
           sx={{ "svg":{
              'path':{
          
                fill:"#5F6269"
              }
            },
          }}
          />
          </Stack>
      
        </Stack>
      <DataTable
        columns={columns}
        data={data}
        settings={tableSetting}
        pagination={pagination}
        loading={false}
      />
      </Stack>
    </Stack>

     <SideDrawer open={openDrawer} onClose={() => closeDrawer(false)}>
        <CreateGrant />
      </SideDrawer>
    </>
  );
};

export default Grants;
