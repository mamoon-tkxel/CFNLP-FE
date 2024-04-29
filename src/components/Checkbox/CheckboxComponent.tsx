import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";

type CheckboxComponentProps = CheckboxProps & {
    check?: boolean,
    title?:string
}

export const CheckboxComponent = ({ check,title, ...args }: CheckboxComponentProps) => {
    return <FormControlLabel
        sx={{
            m:0,
            '& .MuiFormControlLabel-label':{
                fontSize:'14px',
                lineHeight:'20px',
                fontWeight:400,
                color:'#5F6269'
            }
        }}
        control={
          <Checkbox {...args}  checked={check} 
          sx={{padding:0, color:'#92959A' ,
                 '&.Mui-checked': {
                   color: '#92959A',
                 },}}/> 
        }
        label={title}
        
      />

};
