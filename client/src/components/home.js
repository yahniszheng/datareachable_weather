import { Grid, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import './a.css';

const imgMyimageexample = require('./background.jpg');
const divStyle = {
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'  
};

export default function Home(props) {
    return (
        <div style={divStyle}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                <Grid item >
                    <Link to="/country">
                        <Button variant="contained" color="primary" size="lg" >
                            Start    
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
  }