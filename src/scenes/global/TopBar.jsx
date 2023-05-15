import { Box, IconButton, InputBase, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";


const TopBar = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode);
  const colorMode=useContext(ColorModeContext);
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      {/* Search Bar */}
      <Box display='flex' backgroundColor={colors.primary[400]} borderRadius='3px'>
        <InputBase sx={{ml:2, flex:1}} placeholder='Search'></InputBase>
        <IconButton type='button'>
          <SearchIcon/>
        </IconButton>
      </Box>
      {/* Icons */}
      <Box display='flex'>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode==='dark' ? (<LightModeOutlinedIcon/>) : (<DarkModeOutlinedIcon/>)}
          
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
   
      </Box>
  
</Box>  )
}

export default TopBar