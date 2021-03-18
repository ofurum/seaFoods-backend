import React  from 'react';
import Stallion from '../stallion/stallion.component';
import './directory.styles.css'

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
          sections: [{
              title: 'Pink salmon ',
              imageUrl: 'https://fishmarket.com.ua/image/cache/cee66646df8655cbe8134539b5f5c0cc.jpg',
              id: 1
          },
          {
                title: 'horse mackerel 500-900',
                imageUrl: 'https://fishmarket.com.ua/image/cache/01fff9d444a8343c2d3800ce1dd5fc40.jpg',
                id: 2
          },
          {
                title: 'Pink salmon ',
                imageUrl: 'https://fishmarket.com.ua/image/cache/5351ed424efa9b96a80b2c2c0d72fdd9.jpg',
                id: 3
          },
          {
                title: 'Mackerel 400-600(20kg)',
                imageUrl: 'https://fishmarket.com.ua/image/cache/f750f6334aa2af6f680e94c4d769ea11.jpg',
                id: 4
          }]
    }
    }
    render() {
        return(
        <div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id}) => (
                    <Stallion key={id} title={title} imageUrl={imageUrl} />
                ))}
        </div>
        )
    }
}
export default Directory