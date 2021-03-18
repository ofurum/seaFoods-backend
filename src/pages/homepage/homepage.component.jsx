import React from 'react';
import './homepage.styles.css'
import Carousel from '../../components/Carousel/Carousel.component'
import Directory from '../../components/directory/directory.component';
import Magulfdirectory from '../../components/magulf-directory/magulf-directory.component';
import Admiraldirectory from '../../components/admirals-directory/admiral-directory.component';
import Sharondirectory from '../../components/sharon-directory/sharon-directory.component';
import Windekdirectory from '../../components/windek-directory/windek-directory.component.jsx';
import Seafooddirectory from '../../components/seafood-directory/seafood-directory.component';
import Jomadirectory from '../../components/joma-directory/joma-directory.component';
// import StallionStore from '../../components/stores/stallion-store.component';
// import StallionStoreDirectory from '../../components/store-directories/stallion-storeDirectory.component';


const Homepage = () => (
    <div className='homepage'>
        <div className='directory'>
            <div className='hOME'>
                <Carousel/>
                <Directory/>
                <Magulfdirectory/>
                <Admiraldirectory/>
                <Sharondirectory/>
                 <Windekdirectory/>
                <Seafooddirectory/>
                <Jomadirectory/>
                {/* <StallionStoreDirectory/> */}
            </div>
            
            
            
           
           
    
            {/*
            
            <div className="companies">
                <div className='about-joma'>
                    <h1>JOMA</h1>
                </div>
                <div className='card'>
                    <h1>fish</h1>
                </div>
            </div>
            
            <div className="alvana">
                <div className='about-alvana'>
                    <h1>ALVANA</h1>
                </div>
                <div className='card'>
                    <h1>fish</h1>
                </div>
            </div> */}
           
        </div>
    </div>
)

export default Homepage