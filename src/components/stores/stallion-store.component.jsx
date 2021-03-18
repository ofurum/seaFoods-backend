import React from 'react';
import './stallion-store.styles.css'

const StallionStore = ({ imageUrl}) => (
<div class="card" style={{ width: "15rem" }}>
      <img src={imageUrl} class="card-img-top" alt="..." />
  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
       {/* <a href="" class="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
)
export default StallionStore
