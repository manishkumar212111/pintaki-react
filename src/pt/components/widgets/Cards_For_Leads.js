import React , {Fragment} from 'react';
import LazyImage from '../elements/LazyImage';
import CLink from '../elements/CLink'
import Like_Unlike from '../elements/Like_Unlike';

const defaultProps = {
  like_unlike:false
}
export default class Card_For_Leads extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const props = this.props;
        let items = props.items;
        return(
        <Fragment>
              <div class="col-md-3 p-0  ">
                  <div class="m-2 project-box set_card_layout ">
                  <CLink href={items.url} default={true}>
                      <div class={`inner-img ${props.innerClass}`}>
                       
                          <ul className="image-grid">
                             <li className="image-grid__item">
                                <a href="#" className="grid-item">
                                   <div
                                      className="grid-item__image"
                                      style={{
                                        background: `url(${items.coverImage}) center center no-repeat`,
                                        backgroundSize: "cover"
                                      }}
                                    />
                                      <p class="titless">
                                          {props.like_unlike && <Like_Unlike like={false}/>}
                                      </p>
                                  </a>
                                  <div className="toppost_bottoms">
                    
                      <div className="toppost_bottoms_text">
                          <span className="post_topic">{items.short_description}</span>
                          </div>
                          {items.price && <span class="price-box"><i class="fa fa-inr" aria-hidden="true"></i> {items.price}
                          </span> }  
                    </div>
                  </li>
                </ul>
                      </div>
                   
                     </CLink>
                
                      
                  </div>
              </div>
                
            </Fragment>
        )
    }    
};

Card_For_Leads.defaultProps = defaultProps;