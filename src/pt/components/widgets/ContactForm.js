import React from 'react';

export default class ContactForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="col-sm" >
                <h3 className="font-weight-bold">Write to us</h3>
                <span>Send your query to us </span>
                <div className="form-group mt-5">
                    <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
                </div>
                <div class="form-group my-4" >
                    <input type="text" className="form-control" id="number" placeholder="Enter Number"/>
                </div>
                <div class="form-group my-4" >
                    <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
                </div>
                <div>
                    <textarea className="form-control" rows="5" id="comment" placeholder="Enter Commment"></textarea>
                </div>
                    <button type="button" className="btn btn-danger btn-block my-4">Submit</button>
            </div>
        )
    }
}