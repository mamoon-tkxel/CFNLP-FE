import { Button, ButtonProps } from "@mui/material";
type ButtonComponentProps = ButtonProps & {
  type?: string;
  text?: string;
  className?: string;
  onClick?: () => void;
};
export const ButtonComponent = ({
  type,
  text,
  className,
  onClick,
  ...arg
}: ButtonComponentProps) => {
  return (
    <Button onClick={onClick} className={className} type={type} {...arg}>
      {text}
    </Button>
  );
};
