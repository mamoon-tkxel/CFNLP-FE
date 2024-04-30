import { Header } from "@/components/Header";
import { LeftMenu } from "@/components/LeftMenu";

import "./style.css";
import { Box, Stack } from "@mui/material";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Stack className="wrapper" style={{backgroundColor:"#F0F2F6"}}>
        <Header />
      <Stack
      flexDirection="row"
      className="dashboard">
          <LeftMenu />
        <Box
         sx={{
          minHeight:"calc(100vh - 64px)", 
          maxHeight:"calc(100vh - 64px)", 
          minWidth:"calc(100vw - 230px)",
          maxWidth:"calc(100vw - 230px)",
          overflowY:"auto",
          overflowX:"hidden",
          padding:"24px"
          }}> {children}</Box>
      </Stack>
    </Stack>
  );
};

export default AdminLayout;
