import React from 'react';
import LazyImage from '../elements/LazyImage';

const defaultProps = {
    images : {},
    imgHeight : '200px',
    firstImageLazy : false,
    activeIndex: 0,
    outerDivCls: "",
    innerDivCls : ""
}

var startPos, endPos;
export default class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
        this.handleNextPrevClick = this.handleNextPrevClick.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }

    handleNextPrevClick(nextFlag){

        let activeIndex = this.state.activeIndex;
        if (nextFlag) {
            activeIndex = (this.state.activeIndex < this.props.images.length - 1) ? activeIndex + 1 : activeIndex; 
        } else {
            activeIndex = this.state.activeIndex > 0 ? this.state.activeIndex - 1 : this.state.activeIndex;
        }
        if (activeIndex != this.state.activeIndex) {
            this.setState({
                activeIndex : activeIndex 
            });
        }
    }

    onTouchStart(e) {
        startPos = e.changedTouches[0].pageX;                    
    }

    onTouchEnd(e) {
        if (startPos) {
            endPos = e.changedTouches[0].pageX;            
            let diff = endPos - startPos;
            if (diff < -70) {
                this.handleNextPrevClick(true);
            } else if (diff > 70) {
                this.handleNextPrevClick(false);
            }
        }    
    }

    render(){
        let props = this.props;
        let images = props.images;
        if(typeof images == 'undefined' || images.length == 0 )
            return null;
            
        return (
            <div className={`{props.outerDivCls} `}>
                <div className = {`{props.innerDivCls} `} onTouchStart={(e) => this.onTouchStart(e)} onTouchEnd={(e) => this.onTouchEnd(e)}>
                    { images && images[this.state.activeIndex] &&
                        <LazyImage 
                            src={images[this.state.activeIndex].src} 
                            alt={images[this.state.activeIndex].title} 
                            height={props.imgHeight} 
                            lazy={props.activeIndex == 0 && !props.firstImageLazy ? false : true} 
                        />
                    }
                </div>
                {images.length > 1 && <div className="arr_btn">
                    {<span className="counting_cls">{this.state.activeIndex + 1}/{images.length}</span>}
                    {this.state.activeIndex > 0 && <span className="prevButton" onClick={() => this.handleNextPrevClick(false)}>prev</span>}
                    {this.state.activeIndex < (images.length -1 ) && <span className="nextButton" onClick={() => this.handleNextPrevClick(true)}>next</span>}
                </div>}
            </div>
        );
    }
}

Slider.defaultProps = defaultProps;