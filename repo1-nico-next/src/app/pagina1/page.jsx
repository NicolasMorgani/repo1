"use client"
import { Container } from 'react-bootstrap'
import IndividualIntervalsExample from '../components/sliderPagina'
import VideoPlayerp1 from '../components/videoP1'




function page() {
  return (
  <>
    <IndividualIntervalsExample/>
  
    <Container >
   
    <VideoPlayerp1 videoSrc="/avion1.mp4"/>
    
    </Container>
    </>
  )
}

export default page