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
export default class Card extends React.Component{
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
                              
                                <LazyImage src={items.coverImage} alt={items.title} height={props.imgHeight}/>
                            </div>
                            <h5>{items.short_description}</h5></CLink>
                            {items.price && <span class="price-box"><i class="fa fa-inr" aria-hidden="true"></i> {items.price}</span>}
                        </div>
                    </div>
                
            </Fragment>
        )
    }    
};

Card.defaultProps = defaultProps;