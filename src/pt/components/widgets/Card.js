import React , {Fragment} from 'react';
import LazyImage from '../elements/LazyImage';
import CLink from '../elements/CLink'

const defaultProps = {
    viewALlTitle : "View All",
    description : "This is test desc",
    headerTitle : "New projects"
}
export default class Card extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const props = this.props;
        let items = props.items;
        return(<Fragment>
                <div class="row">
                    <div class="col-md-6">
                        <div class="project-box">
                            <div class="inner-img">
                                <LazyImage src={items.coverImage} alt={items.title} />
                            </div>
                            <CLink href={items.url} default={true}><h5>{items.short_description}</h5></CLink>
                            {items.price && <span class="price-box"><i class="fa fa-inr" aria-hidden="true"></i> {items.price}</span>}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }    
};

Card.defaultProps = defaultProps;