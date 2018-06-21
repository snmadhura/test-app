import React, { Component } from 'react';
import axios from 'axios';

class projectPortfolio extends Component {

    state = {
        projectData: []
    }

    render() {
        axios.get('http://www.json-generator.com/api/json/get/cgtMythDDm?indent=2')
            .then((response) => {
                //console.log(response.data)
                this.setState({ projectData: response.data });
                // console.log(this.state.projectData);
            });   
        return (
            this.state.projectData.map((data) =>{
                return(
                    
                    <div className="col-md-6 col-lg-4" key={data._id}>
                        <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                            <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                                <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                                    <i className="fa fa-search-plus fa-3x"></i>
                                </div>
                            </div>
                             <img className="img-fluid" src={data.picture} alt="portfolio" />
                        </a>
                    </div>
                    
                );
            })

        );
    }
  
}

export default projectPortfolio;