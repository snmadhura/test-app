import React, { Component } from 'react';
import axios from 'axios';
import './projectPortfolio.css';
import Aux from '../Auxilliary/Auxilliary';
import Modal from '../Layout/UI/Modals/Modals';

class projectPortfolio extends Component {

    state = {
        projectData: [],
        //display: false,
        array: [{
            id: 1, name: 'madhu'
        },
        { id: 2, name: 'someone' }],
        updatedData: [],
        activeModal: null
    }

    displayInfoHandler = (data, index) => {
      //  console.log(data);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + data)
            .then((response) => {
                //   console.log(response.data);
                //const res = response.data;
                this.setState({ updatedData: response.data });
            //    console.log(this.state.updatedData);

            });
        console.log(index);
        this.setState({ activeModal: index });
    }


    modalCloseHandler = () => {
        this.setState({ activeModal: null });
    }

    render() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const compData = response.data.slice(0, 6);

                this.setState({ projectData: compData });
                
            })


        return (

            this.state.projectData.map((data, index) => {
                return (
                    <Aux key={data.id}>
                        <div className="col-sm-12 col-md-6 col-lg-6 porfolio">
                            <h4>{data.title}</h4>
                            <p>Project by <strong>{'Username' + data.id}</strong></p>
                            <button onClick={() => this.displayInfoHandler(data.id, index)} >View</button>
                        </div>
                        <Modal show={this.state.activeModal === index}>
                        <p></p>
                            <p>Project by <strong>{this.state.updatedData.title}</strong></p>
                            <button onClick={this.modalCloseHandler}>Close</button>
                        </Modal>
                    </Aux>
                )
            })





        );
    }

}

export default projectPortfolio;