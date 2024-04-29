import { Button, ButtonProps } from "@mui/material"
type ButtonComponentProps= ButtonProps & {
    title?:string,
}
export const ButtonComponent =({title,...args}:ButtonComponentProps)=>{
    return(
        <Button {...args}>{title}</Button>
    )
}