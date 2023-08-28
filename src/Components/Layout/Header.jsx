import React, { useState } from 'react';
// import React from 'react'
import { AppBar, Box, Divider, Draw, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import Logo from '../../images/logo.svg'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link,NavLink } from 'react-router-dom';
import '../../Styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onclick={handleDrawerToggle}> sx={{ textAlign: 'center' }}
      <Typography
        color={'goldenrod'}
        variant='h6'
        component="div"
        sx={{ flexGrow: 1, my:2 }}
      >
        <FastfoodIcon />
        My Restaurant
      </Typography>


      <ul className='mobile-navigation'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>

    </Box>
  )
  return (
  <div>
      <Box>
        <AppBar Component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton color='inherit' aria-level="open frawer" edge="start" sx={{
              mr: 2, 
              display: { sm: 'none' }
            }}
            onclick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={'goldenrod'}
              variant='h6'
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250px"/>
            </Typography>
            <Divider/>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>

              <ul className='navigation-menu'>
                <li>
                  <NavLink activeClassName="active" to={'/'}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/menu'}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                  <NavLink to={'/contact'}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>

        </AppBar>
        <Box component="nav">
          <Drawer variant='temporary' open={mobileOpen}
           onClose={handleDrawerToggle}
           sx = {{display:{xs:'block',sm:'none'},"& .MuiDrawer-paper":{
            boxSizing:"border-box",
            width:"240px"
           }}}>
            {Drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
        
        </Box>
    </div>
  )
}

export default Header