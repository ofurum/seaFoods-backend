import React  from 'react';
import Seafood from '../seafood/seafood.component';
import './seafood-directory.styles.css'

class Seafooddirectory extends React.Component {
    constructor() {
        super();
        this.state = {
          sections: [{
              title: 'Herring Vardin Pelagic',
              imageUrl: 'https://fishmarket.com.ua/image/cache/327430330c91b172799a978c341780b9.jpg',
              id: 1
          },
          {
                title: 'Matias herring',
                imageUrl: 'https://fishmarket.com.ua/image/cache/7be7b7854826c0af4a4f81b3290860fb.jpg',
                id: 2
          },
          {
                title: 'Herring s  / m 450',
                imageUrl: 'https://fishmarket.com.ua/image/cache/216fa394ffa40f5d00c4225d094da85a.jpg',
                id: 3
          },
          {
                title: 'Mackerel 400-600 Shetland',
                imageUrl: 'https://fishmarket.com.ua/image/cache/0f071680fa0c34a8573d7e9d238aa5be.jpg',
                id: 4
          }]
    }
    }
    render() {
        return(
        <div className='seafood-directory'>
           {
               this.state.sections.map(({title, imageUrl, id}) => (
                <Seafood key={id} title={title} imageUrl={imageUrl} />
               ))
           }
        </div>
        )
    }
}
export default Seafooddirectory