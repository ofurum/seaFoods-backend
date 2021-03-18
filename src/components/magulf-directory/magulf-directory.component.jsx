import React  from 'react';
import Magulf from '../magulf/magulf.component';
import './magulf-directory.styles.css'

class Magulfdirectory extends React.Component {
    constructor() {
        super();
        this.state = {
          sections: [{
              title: 'Mackerel 450-600 ',
              imageUrl: 'https://fishmarket.com.ua/image/cache/85992b1fbeec9db81c88a62788c2ce9d.jpg',
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
        <div className='magulf-directory'>
            {
                this.state.sections.map(({title, imageUrl, id}) => (
                    <Magulf key={id} title={title} imageUrl={imageUrl} />
                ))}
        </div>
        )
    }
}
export default Magulfdirectory