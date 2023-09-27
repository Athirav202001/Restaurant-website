import React from 'react'
import{Box,Typography} from '@mui/material'
import {styled} from '@mui/system'
import CustomButton from '../CustomButton/CustomButton';
import logoimg from '../../assets/restaurant.png'
import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from '@mui/icons-material/Contacts'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
 function Header() {
    const [mobileMenu, setMobileMenu] = useState({left:false})
    const navigate = useNavigate()
    
    const togleDrawer =(anchor,open)=>(event)=>{
if(event.type === "keydown"&&(event.type === "Tab" || event.type === "shift")){
return;
}
setMobileMenu({...mobileMenu,[anchor]:open})
        
}
const list = (anchor)=>(
<Box sx={{
    width:anchor==="top" || anchor==="bottom"? "auto" :250
}}
    role='presentation'
    onClick={togleDrawer(anchor,false)}
    onKeyDown = {togleDrawer(anchor,false)}
>
    <List>
        {
            nav_titles.map((item,index)=>(
            <ListItem key={item.index} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
                <ListItemIcon>
               {
                index===0&& <HomeIcon/>
               }
                {
                index===1&& <FeaturedPlayListIcon/>
               }
                {
                index===2&& <MiscellaneousServicesIcon/>
               }
                {
                index===3&& <ContactsIcon/>
               }
                </ListItemIcon>
                <ListItemText primary={item.display}/>
            </ListItemButton>
        </ListItem>
            ))
        }
        
    </List>
</Box>
)

    const nav_titles =[{
        path:'/',
        display:'Home'
    },
    {
        path:'/dishes',
        display:'Dishes'  
    },
    {
        path:'/services',
        display:'Services'
    },
    {
        path:'/about',
        display:'About Us'
    }
]

const NavBarLinksBox = styled(Box)(({ theme })=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        display:'none'
    },   
}));
const NavBarLink = styled(Typography)(()=>({
    fontSize:'15px',
    fontWeight:'bold',
    color:'#4F5361',
    cursor:'pointer',
    '&:hover':{
        color:'#fff'
    }  
}));
const NavBarLogo = styled("img")(({theme})=>({
    cursor:'pointer',
    [theme.breakpoints.down("md")]:{
        display:'none'
    }, 
}));
const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
    cursor:'pointer',
    display:'none',
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]:{
        display:'block',
    }, 
}));
return(
    <Box
    sx={{
display:'flex',
alignItems:'center',
justifyContent:'space-between',
padding:'40px',
maxWidth:'auto',
backgroundColor:'#FED801',
marginLeft:'0px',
marginBottom:'-24px'
    }}>
        <Box 
        
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'2.5rem'
            }}>
                <Box
                sx={{
                    display:'flex',
                    alignItems:'center',
                    }}>
                <CustomMenuIcon onClick={togleDrawer("left",true)}/>
                <Drawer
                anchor='left'
                open={mobileMenu["left"]}
                onClose={togleDrawer("left",false)}
                >
                {list("left")}
                </Drawer>
                <NavBarLogo src={logoimg} alt="" height="50Px" width="50px"/><h3>MiaMi</h3>
                </Box>
            <NavBarLinksBox>
                {
                    nav_titles.map((item,index)=>(
                        <NavBarLink variant='body2'onClick={()=>navigate(item.path)}>
                        {item.display}
                        </NavBarLink>
                    ))
                }                    
            </NavBarLinksBox>
        </Box>
        <Box
        
        sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            gap:'1rem'
                }}>
        <NavBarLink variant='body2'>
                        Sign Up
                        </NavBarLink>
                        <CustomButton backgroundColor='#0F184C'
                        color='#fff'
                        buttonText='Register'/>
        </Box>
    </Box>
  )
}

export default Header
