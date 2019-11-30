import React from "react";
const cardList = [
    {icon : "fa fa-phone" , title:"Call-us" , description:<div >+91 1234567891<div className="font-weight-light">Mon to Sat 9:30 AM to 6 PM</div></div>},
    {icon : "fa fa-envelope" , title:"E-Mail" , description:<div>abc@pintaki.com</div>},
    {icon : "fa fa-map-marker" , title:"Address" , description:<div>12/335,jagatpura,jaipur,rajasthan -123456</div>}
]
const Contact = ()=>{

  const simplecard = (icon , title , subtitle)=>{
    let card_view = [];
      cardList.map((val)=>card_view.push( 
         <div class="card mx-auto my-3 " style={{width: "22rem"}}>
           <div class="card-body">
               <div className="row">
                 <div className="col-2">
                   <i className={`${val.icon}`} ></i>
                 </div>
                 <div className="col-10">
                   <div class="card-text font-weight-light">{val.title}</div>
                   <div class="card-text">{val.description}</div>
                 </div>
                 </div>      
            </div>
          </div>
          )        
    )
  return card_view;
  }
    return(
        <div>
          <div class="container mt-5">
                 <div class="row m-lg-5">
                      <div class="col-sm" >
                      <h3 className="font-weight-bold">Write to us</h3>
                      <span>Send your query to us </span>
                          <div class="form-group mt-5">
                            <input type="text" class="form-control" id="name" placeholder="Enter Name"/>
                          </div>
                          <div class="form-group my-4" >
                            <input type="text" class="form-control" id="number" placeholder="Enter Number"/>
                          </div>
                          <div class="form-group my-4" >
                            <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
                          </div>
                          <div>
                             <textarea class="form-control" rows="5" id="comment"></textarea>
                          </div>
                          <button type="button" class="btn btn-danger btn-block my-4">Submit</button>
                       </div>
                       <div class="col-sm" >
                    <div  >
                       {simplecard()}
                    </div>
                   
                       </div>
                 </div>
             </div>
        </div>
    )
}
export default Contact;