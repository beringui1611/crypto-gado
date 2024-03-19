import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Banner from '../assets/cryptogado-banner.png';

import { Container, Image} from './styles'
import { useNavigate } from 'react-router-dom';

function App() {
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const navigate = useNavigate();

  const progressRef = React.useRef(() => { });

  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
        navigate('/home');
      } else {
        const diff = Math.random() * 20;
        const diff2 = Math.random() * 20;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  }, [progress, navigate]); 
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progressRef.current) { 
        progressRef.current();
      }
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []); 

  return (
    <Container>
      <Image src={Banner} alt='banener'/>
       <Box sx={{ width: '80%', position: "absolute", marginTop: "600px", marginLeft: "100px" }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      </Box> 
    </Container>
  );
}

export default App;
