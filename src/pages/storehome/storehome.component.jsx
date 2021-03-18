import React from 'react';
import StallionProductCategory from '../../components/product-category-stallion/product-category-stallion.component';
import StallionStoreDirectory from '../../components/store-directories/stallion-storeDirectory.component';
import './storehome.styles.css'



const StoreHome = () => (
    <div className='store-home'>
        <div className='directory'>
            <div className='header'>
               <StallionProductCategory/>
               <StallionStoreDirectory/>
            </div>
            
            
            
           
           
    
            
        </div>
    </div>
)

export default StoreHome