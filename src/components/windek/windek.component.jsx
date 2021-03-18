import React from 'react';
import './windek.styles.css'


const Windek = ({ title, imageUrl }) => (
    <div class="card" style={{ width: "18rem", height:'25rem',marginTop: '5rem' }}>
      <img src={imageUrl} class="card-img-top" alt="..." />
  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick exampllk of the card's content.</p>
       {/* <a href="" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>




    // <div className="windek">
    //     <div
    //      style={{
    //         background: `url(${imageUrl})${'no-repeat'}`,
    //         width:'230px', height: '230px'
    //     }}
    //      className='about-windek'>
    //     </div>
    //     <div className='windek-product-name'>
    //         <h1>{title}</h1>
    //     </div>
    // </div>
)
export default Windek