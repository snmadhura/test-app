import React, { Component } from 'react';
import axios from 'axios';
import './projectPortfolio.css';
import Aux from '../Auxilliary/Auxilliary';

class projectPortfolio extends Component {

    state = {
        projectData: [],
        display : false
    }

modalHandler = () =>{
    const modalDisplay = this.state.display;
    
}

    render() {
        axios.get('http://www.json-generator.com/api/json/get/cgtMythDDm?indent=2')
            .then((response) => {
                //console.log(response.data)
                this.setState({ projectData: response.data });
                // console.log(this.state.projectData);
            });
        return (
            this.state.projectData.map((data) => {
                return (
                    <Aux>
                        <div className="col-sm-12 col-md-3 col-lg-3 porfolio" key={data._id}>
                            <h4>{data.company}</h4>
                            <p>Project by <strong>{data.name}</strong></p>

                        </div>
                        <Modal show={this.state.display} modalClosed={this.modalHandler}>
                            <ProjectDetails />
                            create above component and do maja
                        </Modal>
                    </Aux>
                );
            })

        );
    }

}

export default projectPortfolio;