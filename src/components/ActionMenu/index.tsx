import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MoreVertIcon } from '@/assets/svgs';

const options = [
  'View Applications',
  'Send Invitation',
  'Edit',
  'Delete',
];
export const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div>
    <IconButton
    aria-label="more"
    id="long-button"
    aria-controls={open ? 'long-menu' : undefined}
    aria-expanded={open ? 'true' : undefined}
    aria-haspopup="true"
    onClick={handleClick}
  >
    {MoreVertIcon}
  </IconButton>
  <Menu
    id="long-menu"
    MenuListProps={{
      'aria-labelledby': 'long-button',
    }}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    sx={{minHeight:"192px", width:"200px",borderRadius:"8px", boxShadow: '0px 4px 16px 0px #00000026'
  }}
  
  >
    {options.map((option) => (
      <MenuItem  key={option}  onClick={handleClose} sx={{padding:"12px, 16px, 12px, 16px"}}>
        {option}
      </MenuItem>
    ))}
  </Menu>
</div>
  )
};
