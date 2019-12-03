import React , {Fragment} from 'react';
import LazyImage from '../elements/LazyImage';
import CLink from '../elements/CLink'

const defaultProps = {
    viewALlTitle : "View All",
    description : "This is test desc",
    headerTitle : "New projects",
    imgHeight : 'auto',
    innerClass : "",
}
export default class Card_For_Leads extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const props = this.props;
        let items = props.items;
        return(<Fragment>
                    <div class="col-md-3 p-0  ">
                        <div class="m-2 project-box set_card_layout ">
                        <CLink href={items.url} default={true}>
                            <div class={`inner-img ${props.innerClass}`}>
                                {/* changes in card for design */}
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
                            <p class="titless"><i class="fa fa-heart" aria-hidden="true"></i></p>
                            <p class="h2sss"> {/*val.title*/} </p>
                            {/* <div className="grid-item__hover"></div> */}
                            <div className="grid-item__name">
                              {/*Los Angeles*/}
                            </div>
                          </a>
                          <div className="toppost_bottoms">
                          
                            <div className="toppost_bottoms_text">
                              
                              <span className="post_topic">{items.short_description}</span>
                            </div>
                            {items.price && <span class="price-box"><i class="fa fa-inr" aria-hidden="true"></i> {items.price}
                            </span> }
                            {/* {this.props.data.data &&
                              this.props.data.data.items.map(valee =>
                                val.linkedEntityIds.map((valle, i) =>
                                  valee.id === valle ? (
                                    <div
                                      style={{
                                        position: "absolute",
                                        bottom: 20
                                      }}
                                    >
                                        hiii
                                      <BlogTitle title={valee.name} />{" "}
                                    </div>
                                  ) : (
                                    ""
                                  )
                                )
                              )} */}
                          </div>
                        </li>
                      </ul>
                                {/* changes ends here */}
                            </div>
                           {/* <h5>{items.short_description}</h5> */}
                           </CLink>
                            {/* {items.price && <span class="price-box"><i class="fa fa-inr" aria-hidden="true"></i> {items.price}
                            </span> } */}
                            
                        </div>
                    </div>
                
            </Fragment>
        )
    }    
};

Card_For_Leads.defaultProps = defaultProps;