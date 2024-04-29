import { addIcon } from "@/assets/svgs";
import { ButtonComponent } from "@/components/Button";
import { Stack, Typography } from "@mui/material";

const Grants = () => {
  return (
    <Stack>
      <Stack
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      padding="24px 24px 32px 24px"
      alignItems="center"
      >
        <Typography className="f-20 lh-23 f-w-800">Grants</Typography>
        <ButtonComponent startIcon={addIcon} className="bg-clr-primary-blue-700 clr-white" title="Add Grant"/>
      </Stack>
    </Stack>
  );
};

export default Grants;
