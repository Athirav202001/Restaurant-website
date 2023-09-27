import React from 'react'
import {Typography} from '@mui/material'
import {styled} from '@mui/system'
import {Box, Container} from '@mui/system'
import deliveryImg from '../../assets/DeliveryImg.png'
import CustomButton from '../../Components/CustomButton/CustomButton'
function Delivery() {
    const CustomBox = styled(Box)(({theme})=>({
        padding:theme.spacing(10,0,10,0),
        margin:theme.spacing(0,2,0,2),
        [theme.breakpoints.down("md")]:{
            padding:"0",
        },
    }));

    const CustomContainer = styled(Container)(({theme})=>({
        backgroundColor:"#FED801",
        height:"416px",
        borderRadius:"15px",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",[theme.breakpoints.down("md")]:{
            height:"auto",
            flexDirection:"column",
            alignItems:"center",
            padding:theme.spacing(3,3,0,3),
            width:"90%",
        },
    }));
  return (
   <CustomBox>
    <CustomContainer>
    <Box>
        <Typography sx={{fontSize:"35px",color:"white",fontWeight:"700",fontFamily:"monospace"}}>
            Super Fast Home Delivery!
        </Typography>
        <Typography sx={{fontSize:"16px",color:"#000",fontWeight:"800",fontFamily:"monospace",my:3}}>
           Door to door Delivery!
        </Typography>
        <CustomButton 
        backgroundColor="#fff"
        color="#17275F"
        buttonText="Order Now!"/>
    </Box>
    <img src={deliveryImg} alt="Delivery" style={{maxWidth:"100%"}}/>
    </CustomContainer>
   </CustomBox>
  )
}

export default Delivery
