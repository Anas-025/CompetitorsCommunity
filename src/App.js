import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';
import * as React from 'react';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <MiniDrawer />
    // </div>
    <div style={{height: "100vh", width: "100vw", display: "grid", placeItems: "center"}}>
        <Typography variant="h1" sx={{color: "navy", textAlign: "center", display: "grid", placeItems: "center"}}>
            I Love you 
            <FavoriteIcon sx={{color: "red", fontSize: "10rem"}} />
            Moon
        </Typography>
        
    </div>
  );
}

export default App;
