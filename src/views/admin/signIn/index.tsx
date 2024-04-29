import { ButtonComponent } from "@/components/Button";
import { CheckboxComponent } from "@/components/Checkbox/CheckboxComponent";
import { TextFieldComponent } from "@/components/inputField";
import { Logo } from "@/components/logo";
import { Stack, Typography } from "@mui/material";

const AdminSignIn = () => {
  return (
    <Stack 
    alignItems="center"
    justifyContent="center"
     sx={{
      backgroundColor:'#F0F2F6',
      minHeight:'100vh',
      minWidth:'100vw'
    }}>
      <Stack
      sx={{
        width:"462px",
        padding:"56px",
        backgroundColor:"#ffffff",
        borderRadius:"24px"
      }}
      gap="24px"
      >
        <Stack>
        <Stack
        alignItems="center"
        gap="32px"
        >
        <Logo />
        <Stack
        alignItems="center"
        gap={1}
        >
        <Typography variant="h3" className="f-32 lh-48 f-w-800 clr-pure-black">Welcome Back!</Typography>
        <Typography variant="body1" className="f-16 lh-24 f-w-400 clr-gray-500">Please enter your details</Typography>
        </Stack>
        </Stack>
      <Stack
      gap="16px"
      >
      <TextFieldComponent title="Email" placeholder="e.g. john.doe@example.com" type="text" />
      <TextFieldComponent title="Password" placeholder="********" type="password" />
      <Stack
         flexDirection="row"
         alignItems="center"
         justifyContent="space-between"
     >
      <Stack
      flexDirection="row"
      alignItems="center"
      >
      <CheckboxComponent className="" title="Remember for 30 days"/>
      </Stack>
      <Typography className="f-14 lh-20 f-w-400 clr-gray-1000">Forgot Password</Typography>
     </Stack>
      </Stack>
      </Stack>
      <ButtonComponent title="Log In" variant="contained" className="bg-clr-primary-blue-700 b-radius-8"  fullWidth/>
    </Stack>
    </Stack>
  );
};
export default AdminSignIn;
