import React from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';

function Banner() {
    return (
        <div className="banner">            
            <div className="banner_info">
                <h1>Get out and strech your imagination</h1>
                <h5>Plan a difrerent kind of gataway to uncover the hidden gems near you.</h5>
                <Button variant="outline">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
