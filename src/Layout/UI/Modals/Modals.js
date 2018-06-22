import React,{Component} from 'react';
import Aux from '../../../Auxilliary/Auxilliary';
import './Modal.css';

class Modals extends Component{
render(){
  return(
    <Aux>
       <div className="Modal" 
       style={{
           transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
           opacity: this.props.show ? '1' : '0'
       }}>
           {this.props.children}
       </div>

 {/*<div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
   <div className="portfolio-modal-dialog bg-white">
     <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
       <i className="fa fa-3x fa-times"></i>
     </a>
     <div className="container text-center">
       <div className="row">
         <div className="col-lg-8 mx-auto">
           <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
           <hr className="star-dark mb-5" />
           <img className="img-fluid mb-5" src={require("./images/portfolio/cake.png")} alt="" />
           <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
           <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
             <i className="fa fa-close"></i>
             Close Project</a>
         </div>
       </div>
     </div>
   </div>
 </div>


 <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
   <div className="portfolio-modal-dialog bg-white">
     <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
       <i className="fa fa-3x fa-times"></i>
     </a>
     <div className="container text-center">
       <div className="row">
         <div className="col-lg-8 mx-auto">
           <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
           <hr className="star-dark mb-5" />
           <img className="img-fluid mb-5" src={require("./images/portfolio/circus.png")} alt="" />
           <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
           <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
             <i className="fa fa-close"></i>
             Close Project</a>
         </div>
       </div>
     </div>
   </div>
 </div>

 <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
   <div className="portfolio-modal-dialog bg-white">
     <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
       <i className="fa fa-3x fa-times"></i>
     </a>
     <div className="container text-center">
       <div className="row">
         <div className="col-lg-8 mx-auto">
           <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
           <hr className="star-dark mb-5" />
           <img className="img-fluid mb-5" src={require("./images/portfolio/game.png")} alt="" />
           <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
           <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
             <i className="fa fa-close"></i>
             Close Project</a>
         </div>
       </div>
     </div>
   </div>
 </div>


 <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
   <div className="portfolio-modal-dialog bg-white">
     <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
       <i className="fa fa-3x fa-times"></i>
     </a>
     <div className="container text-center">
       <div className="row">
         <div className="col-lg-8 mx-auto">
           <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
           <hr className="star-dark mb-5" />
           <img className="img-fluid mb-5" src={require("./images/portfolio/safe.png")} alt="" />
           <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
           <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
             <i className="fa fa-close"></i>
             Close Project</a>
         </div>
       </div>
     </div>
   </div>
 </div>


 <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
   <div className="portfolio-modal-dialog bg-white">
     <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="/">
       <i className="fa fa-3x fa-times"></i>
     </a>
     <div className="container text-center">
       <div className="row">
         <div className="col-lg-8 mx-auto">
           <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
           <hr className="star-dark mb-5" />
           <img className="img-fluid mb-5" src={require("./images/portfolio/submarine.png")} alt="" />
           <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
           <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="/">
             <i className="fa fa-close"></i>
             Close Project</a>
         </div>
       </div>
     </div>
   </div>
 </div>
*/}
    </Aux>
);
}

}

export default Modals;