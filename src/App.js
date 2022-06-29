import logo from './logo.svg';

import gtLogo from './images/gt_logo2.png';
import nHLogo from './images/logo.png';
import logo_cpepa from './images/logo_cpepa.png'
import logo_fd from './images/logo-futuro-digital.png'
import fiver_logo from './images/fiver_logo.png'
import upwork_logo from './images/Upwork-Logo.png'
import groomusic from './images/groomusic.png'
import spartbot from './images/spartbot.png'
import pc_tracker from './images/pc_tracker.png'
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Profile from '../src/8bitpix.png'
import { Home4 } from 'styled-icons/remix-fill';
import { TypeH2, TypeH3 } from 'styled-icons/bootstrap';
import Tech from "./Tech.js"
import Experience from "./Experience.js"
import Contact from "./Contact.js"
import Project from "./Project.js"
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import GLOBE from "vanta/dist/vanta.topology.min";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import * as THREE from "three";
import * as p5 from "p5";
import Alert from '@mui/material/Alert';

import IconButton from '@mui/material/IconButton';
import { Circle, Heart } from 'react-spinners-css';

const ContactButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#eca343"),
  backgroundColor: "#cf7a09",
  '&:hover': {
    backgroundColor: "#ab6407",
  },
  borderRadius: 9,
}));

const ProjectButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#eca343"),
  backgroundColor: "white",
  '&:hover': {
    backgroundColor: "#d9d9d9",
  },
  borderRadius: 9,
}));


const Credits = {enabled: false, label: 'Made with fullPage.js', position: 'right'}

function App(fullpageProps) {



  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(false)
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const [display, setDisplay] = useState("none");
  const [slide, setSlide] = useState(false);

  useEffect(() => {
      if (page === 1){
          setAnimate(true)
          console.log(animate)

      }
      else if (page=== 3){
        setSlide(true)
        console.log(slide)

      }
      else{
        setSlide(false)
      }
      if (!vantaEffect) {
        setVantaEffect(
        GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: "#cf7a09",
            points: 15.00,
            maxDistance: 22.00,
            backgroundColor: "#102424",
            spacing: 18.00,
            THREE: THREE,
            p5: p5
          })
        );
        setDisplay("block")
      }
      return () => {

      };
    }, [vantaEffect, page, animate, slide]);


  function afterLoad(origin, destination, direction){
    if (destination != null){
    setPage(destination.index)}
  }

  function loading(){
    if (display === "none"){
    return ( <h1 style={{color: "black",   zIndex: 5, height: "100%", width: "100%"}}>Loading</h1>)}
    else{
      return(
        null
      )
    }
  }

  if(page==2){}

  return (
    <div ref={vantaRef} style={{backgroundColor: "#102424"}}>    
    {loading}

    <div style={{display: ""}}>

    <AppBar elevation={0} color="transparent" sx={{}}  position="fixed">
    <Toolbar color="transparent">
      <Typography href='#Home' color="white" variant="h5" sx={{flexGrow: 1, fontWeight: "bold"}}>
        Alex Portfolio
      </Typography>
      <div style={{display: "flex", gap: "70px", marginRight: "50px"}}>
      <Button href='#Home' variant="text" sx={{color: "white", borderRadius: 3,}}>Home</Button>
      <Button href='#About' variant="text" sx={{color: "white", borderRadius: 3}}>About</Button>
      <Button href='#Experience' variant="text" sx={{color: "white", borderRadius: 3}}>Experience</Button>
      <Button href='#Projects' variant="text" sx={{color: "white", borderRadius: 3}}>Projects</Button>
      <ContactButton href='#Contact' disableElevation variant="contained" sx={{color: "white"}}>Contact</ContactButton>

      </div>

    </Toolbar>
    </AppBar>
    <div style={{position : "absolute", marginTop: "46%", marginLeft: "3%", zIndex: 99}}>
        <Alert style={{ verticalAlign: "bottom"}} variant="filled" severity="warning">
        I AM IN THE PROCESS OF CHANGING PORTFOLIO.
        STILL IN DEVELOPMENT
      </Alert>
    </div>
    <ReactFullpage
      afterLoad={afterLoad}
      licenseKey={"YOUR_LICENSE_KEY"}
      credits =  {Credits}
      anchors={["Home", "About", "Experience", "Projects", "Contact"]}
    render={({ state, fullpageApi }) => {
      console.log(page)
      return (
        
        <ReactFullpage.Wrapper>
          <div  className="section">
            <div className="section1">

            <div className="text">
              <div className="container">
                <div className="row">
                  <div  className="col-md-12 text-center">
                  <h1 style={{letterSpacing: "2px"}}>Software,
                    Front-end and Back-end
                    <br />
                    <a className="animate-charcter">developer</a>
                    
                  </h1>                    


                  </div>
                </div>
              </div>


              </div>
              <div className="arrow bounce">
              <IconButton aria-label="Go down" size="large" color="inherit" onClick={()=>fullpageApi.moveSectionDown()}>
                <KeyboardArrowDownIcon fontSize="large"/>
              </IconButton>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section2">
            <Box m={5}>
            <Grid container justifyContent="space-evenly" spacing={3}>
                <Grid item xs={12}>
                    <div className="text2" style={{  justifyContent: "center", display: "flex"}}>
                    <h1>
                      About Me
                    </h1>
                  </div>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <Fade in={animate}>
                    <Paper sx={{backgroundColor: "rgba(0, 0, 0, 0)", p: 2, gap: 2, color: "white",  height: "50%", display: "flex", justifyContent: "center"}} elevation={0}>
                      <img className="profile" src={Profile}/>
                    </Paper>
                  </Fade>
                </Grid>
                <Grid item xs={12} md={12} lg={8}>
                  <Collapse orientation="vertical"  in={animate}>
                    <Paper sx={{backgroundColor: "#193838", borderRadius: "25px", p: 2, gap: 2, color: "white", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",  height: "auto"}} elevation={0}>
                      <p style={{fontSize: "18px"}}>Hello, my name is Alex. I have been performing as a back-end and front-end web developer for 04 years and am still in the process of gaining more experiences through more years. I'm studying a bachelor’s degree in Software engineering. Some effective on-job training make me more skilled in this field to work in any circumstances. I am passionate of websites and back-end coding and machine learning algorithms. I like to play with codes and results the best output from my work. I have mastered in web languages like the Python, JavaScript, HTML, CSS and my websites are SEO friendly as well.</p>
                    </Paper>
                  </Collapse >
                </Grid>
                <Grid item xs={12}>
                    <div style={{  justifyContent: "center", display: "flex"}}>
                    <h2>
                      Technologies I’ve been working with recently
                    </h2>
                  </div>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Python" iconName="python"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="JavaScript" iconName="javascript"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Cplusplus" iconName="cplusplus"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Lua" iconName="lua"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Css" iconName="css3"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Html" iconName="html5"/>
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                <Tech page={page} title="Django" iconName="django"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="Flask" iconName="flask"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="MongoDB" iconName="mongodb"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="MySQL" iconName="mysql"/>

                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                  <Tech page={page} title="PostgreSQL" iconName="postgresql"/>

                </Grid>
                
                <Grid style={{display: "flex", justifyContent: "center"}} item xs={4} md={2} lg={2} xl={1}>
                <Tech page={page} title="Amazon" iconName="amazonwebservices"/>

                </Grid>
            </Grid>
            </Box>

            </div>
          </div>
          <div className="section">
            <div className="section3" >
            <Box m={0}>
            <Grid style={{width: "100%", height: "100%"}}  container justifyContent="space-evenly" spacing={0}>
                <Grid item xs={12}>
                    <div className="text2" style={{  justifyContent: "center", display: "flex"}}>
                    <h1>
                      Worked in
                    </h1>
                  </div>
                </Grid>
              <Grid className="test" style={{borderRadius: "25px", boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px", marginTop: "50px"}} item xs={11}>
                <Box m={0}>
                <Grid style={{marginBottom: "20px"}} container spacing={3}>
                  <Grid style={{display: "flex", justifyContent: "center", alignItems: "center", alignContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                    <Experience page={page} image={gtLogo}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                        <Experience page={page} image={nHLogo}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                      <Experience page={page} image={logo_cpepa}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                      <Experience page={page} image={logo_fd}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                      <Experience page={page} image={fiver_logo}/>
                  </Grid>
                  <Grid style={{display: "flex", justifyContent: "center"}} item xs={12} md={6} lg={6} xl={4}>
                  <Experience page={page} image={upwork_logo}/>

                  </Grid>
                </Grid>
                </Box>
              </Grid> 
              
              </Grid>
              
            </Box>
          </div>
          </div>
          <div className='section'>          
            <div className="slide" style={{backgroundColor: "#121215", minHeight: "100%",color: "whitesmoke",display: "flex",justifyContent: "center"}}>
            <Box m={8}>
              <Grid container spacing={2}>
                    <Grid item xs={12} style={{alignText: "center", display: "flex", alignItems: "center", justifyContent: "center",}}>
                      <div className="textProject" style={{  justifyContent: "center", display: "flex"}}>
                        <h1>
                          GrooMusic
                        </h1>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
      
                      <Project page={page} image={groomusic}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} style={{}}>
                      <div style={{marginTop: "25px", alignText: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",}}>
                      <Typography variant="body1">This website allows you to create private or public rooms to listen to music synchronously with other people, you can modify the permissions of each member or include your room elsewhere with the API.</Typography>
                      </div>
                      <ProjectButton size="medium" style={{marginTop: "25px"}}>Go</ProjectButton>
                    </Grid>
                    
              </Grid>

            </Box>
            </div>
            <div className="slide" style={{backgroundColor: "#1F1F1F", minHeight: "100%",color: "whitesmoke",display: "flex",justifyContent: "center"}}>
            <Box m={8}>
              <Grid container spacing={2}>
                    <Grid item xs={12} style={{alignText: "center", display: "flex", alignItems: "center", justifyContent: "center",}}>
                      <div className="textProject" style={{  justifyContent: "center", display: "flex"}}>
                        <h1>
                          SpartBot
                        </h1>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <Project page={page} image={spartbot}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} style={{alignText: "center"}}>
                    <div style={{marginTop: "25px", alignText: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",}}>
                      <Typography variant="body1">A management application for companies and communities, this tool allows moderation, ticket management and customer protection, it also has multiple integrations with Discord, Telegram, Slack and others.</Typography>
                    </div>
                    <ProjectButton style={{marginTop: "25px"}}>Go</ProjectButton>
                    </Grid>
                    
              </Grid>

            </Box>
            </div>         
            <div className="slide" style={{backgroundColor: "#383838", minHeight: "100%",color: "whitesmoke",display: "flex",justifyContent: "center"}}>
            <Box m={8}>
              <Grid container spacing={2}>
                    <Grid item xs={12} style={{alignText: "center", display: "flex", alignItems: "center", justifyContent: "center",}}>
                      <div className="textProject" style={{  justifyContent: "center", display: "flex"}}>
                        <h1>
                          PC  Tracker
                        </h1>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                      <Project page={page} image={pc_tracker}/>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} style={{alignText: "center"}}>
                    <div style={{marginTop: "25px", alignText: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",}}>
                      <Typography variant="body1">An application intended for the unique identification of a PC in a discrete way without the user's knowledge, currently this application is used to perform tests remotely.</Typography>
                    </div>
                    <ProjectButton style={{marginTop: "25px"}}>Go</ProjectButton>
                    </Grid>
                    
              </Grid>

            </Box>
            </div>

          </div>
          <div className="section">
            <div className="section2">
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <div className="text2" style={{  justifyContent: "center", display: "flex"}}>
                    <h1>
                      Contact
                    </h1>
                  </div>
                </Grid>
                <Grid item xs={12} style={{marginTop: "-300px"}}>
                  <Contact page={page}/>
                </Grid>
              </Grid>
              
            </div>
            
          </div>
        </ReactFullpage.Wrapper>
        
      );
    }}
  />

  </div>
  
  </div>
);
}



export default App;