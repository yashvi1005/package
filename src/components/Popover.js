import React, {useState} from 'react'
import List from './List'

const Popover = () => {
    const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = (event) => {
    console.log(7, 'click')
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
    const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  return (
    <Popover
            id={id}
            popoverHandleClick={handleClick}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
          </Popover>
  )
}

export default Popover