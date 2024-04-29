import { Fab, Link, Stack, Typography } from "@mui/material";
import { Logo } from "../logo";
import { arrowIcon, bellIcon } from "@/assets/svgs";

export const Header = () => {
  return <Stack
  alignItems="center"
  justifyContent="space-between"
  flexDirection='row'
  sx={{
    minHeight:'64px',
    padding:"12px 32px",
    borderBottom:"1px solid #DFE2E8",
    backgroundColor:"#ffffff"
    
  }}
  >
    <Link
    sx={{
     'svg':{
      width:"44.85px",
      height:"auto",
     }
    }}
    
    >
    <Logo/>
    </Link>
    <Stack
    flexDirection='row'
    gap={2}
    >
      <Fab
      size="small"
      sx={{
        backgroundColor:"#F0F2F6"
      }}
      >
        {bellIcon}
      </Fab>
      <Fab
      variant="extended"
      sx={{
        height:"40px",
        backgroundColor:"#F0F2F6"
      }}
      >
      <span className="height-24 width-24 b-radius-12 bg-clr-pink-100 clr-white">O</span>
        <Typography>Olivia</Typography>
        {arrowIcon}

      </Fab>
      
    </Stack>
  </Stack>;
};
