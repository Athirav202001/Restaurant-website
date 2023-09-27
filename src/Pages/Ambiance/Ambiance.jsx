import React from 'react'
import {Typography} from '@mui/material'
import {styled} from '@mui/system'
import {Box, Container} from '@mui/system'
import houseCard from '../../assets/ambience.jpg'
function Ambiance() {
    const CustomBox = styled(Box)(({theme})=>({
        display:"flex",
        gap:theme.spacing(10),
        alignItems:"center",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            textAlign:"center",
        },
    }));

    const ImgContainer = styled(Box)(({theme})=>({
        width:"100%",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center",
            display:"flex",
        },
    }));

    const Divider = styled("div")(({theme})=>({
        width:"13%",
        height:"5px",
        backgroundColor:"#000339",
        [theme.breakpoints.down("md")]:{
            marginLeft:"auto",
            marginRight:"auto",
        },
    }));

    const TextFlexBox = styled(Box)(({theme})=>({
        marginTop:theme.spacing(7),
        display:"flex",
        justifyContent:"space-between",
        padding:theme.spacing(0,5,0,5),
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column",
            gap:theme.spacing(5),
        },
    }));

    const SmallText = styled(Typography)(({theme})=>({
        fontSize:"18px",
        color:"#788087",
        fontWeight:"500",
        [theme.breakpoints.down("md")]:{
            fontSize:"14px",
        },
    }));

    const LargeText = styled(Typography)(({theme})=>({
        fontSize:"64px",
        color:"#000",
        fontWeight:"700",
        [theme.breakpoints.down("md")]:{
            fontSize:"32px",
        },
    }));
  return (
    <Box sx={{py:10}}>
        <Container>
            <CustomBox>
                <ImgContainer>
                <img src={houseCard} alt="house"  style={{maxWidth:"100%"}}/>
                </ImgContainer>
                <Box>
                    <Divider/>
                    <Typography sx={{fontSize:'35px',color:"#000339",fontWeight:"700",my:3}}>
                        You have found an ambiance you love.
                    </Typography>
                    <Typography sx={{fontSize:'16px',color:"#5A6473",lineHeight:"27px"}}>
                        Discover the epitome of culinary excellence at Savoria, where every visit is an enchanting rendezvous with the art of dining.
                    </Typography>
                </Box>
            </CustomBox>
            <TextFlexBox>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                   <LargeText>250+</LargeText> 
                   <SmallText>Dishes</SmallText>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                   <LargeText>300+</LargeText> 
                   <SmallText>Trusted Clients</SmallText>
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                   <LargeText>350+</LargeText> 
                   <SmallText>Deliver per day</SmallText>
                </Box>
            </TextFlexBox>
        </Container>

    </Box>
  );
};

export default Ambiance
