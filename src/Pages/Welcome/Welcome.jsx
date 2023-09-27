import React from 'react'
import {Box,Typography} from '@mui/material'
import {styled} from '@mui/system'
import { Container } from '@mui/system'
import CustomButton from '../../Components/CustomButton/CustomButton'
import welcome from '../../assets/welcome.png'

    const Welcome =()=>{

        const CustomBox = styled(Box)(({theme})=>({
            display:"flex",
            justifyContent:"center",
            gap:theme.spacing(5),
            marginTop:theme.spacing(3),
            [theme.breakpoints.down("md")]:{
                flexDirection:"colomn",
                alignItems:"center",
                textAlign:"center",
            },
        }));
   const Title = styled(Typography)(({theme})=>({
   fontSize:'64px',
   color:'#fff',
   fontWeight:'bold',
   [theme.breakpoints.down("sm")]:{
    fontSize:'40px',
   },
   }));

  return (
<Box sx={{backgroundColor:"#FED801",minHeight:"80vh"}}>
    <Container>
        <CustomBox>
    <Box sx={{flex:"1"}}>
        <Typography variant='body2'
        sx={{
fontSize:"18px",
color:"#687690",
fontWeight:"500",
mt:"10",
mb:"4",
my:4
 }}>
Welcome To MiaMi Restaurant
</Typography>
        <Typography variant='h2'
        sx={{fontSize:"bold",fontWeight:"700",color:"white",my:6}}>
            Discover a Place where you'll love to Eat
        </Typography>
        <Typography variant='body2'
        sx={{fontSize:"18px",color:"#5A6473",my:4}}>
Immerse yourself in the elegant ambiance as you savor each bite, accompanied by our extensive selection of hand-picked wines and carefully curated cocktails.
        </Typography>
        <CustomButton backgroundColor="#0F184c"
        color='#fff'
        buttonText="More About us"
        welcomeBtn={true}
        />
    </Box>
    <Box sx={{flex:"1.25"}}>
        <img src={welcome} alt="welcome"
        style={{maxWidth:"100%", marginBottom:"2rem"}} />
   </Box>
        </CustomBox>
    </Container>
</Box>
  );
};

export default Welcome
