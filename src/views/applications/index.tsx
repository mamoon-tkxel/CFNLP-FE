import { Stack, Typography } from "@mui/material";
import useAdminGrant from "@/hooks/useAdminGrant";
import { ApplicationFilters } from "./filters";
import { ApplicationTabs } from "./tabs";
import { ApplicationListing } from "./listing";

type APPLICATION_TYPES = {
  pageTitle?: string;
  applicationType?: string;
};

const Applications = ({
  pageTitle = "Applications",
  applicationType = "AdminApplications",
}: APPLICATION_TYPES) => {
  const { pagination, handlePageChange, TableData } = useAdminGrant();

  return (
    <>
      <Stack gap="24px">
        <Stack
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
        >
          <Typography className="f-20 lh-23 f-w-800">{pageTitle}</Typography>
        </Stack>
        <ApplicationTabs onChange={(value) => console.log(value)} />
        <Stack
          borderRadius="24px"
          gap="24px"
          sx={{
            backgroundColor: "#FFFFFF",
          }}
          p="24px 0 0 0"
        >
          <ApplicationFilters />
          <ApplicationListing
            applicationType={applicationType}
            data={TableData}
            pagination={pagination}
            loading={false}
            handlePageChange={handlePageChange}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Applications;
