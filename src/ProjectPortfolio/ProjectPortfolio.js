import React, { Component } from 'react';
import axios from 'axios';
import './projectPortfolio.css';
import Aux from '../Auxilliary/Auxilliary';
//import ProjectDetails from '';
import Modal from '../Layout/UI/Modals/Modals';

class projectPortfolio extends Component {

    state = {
        projectData: [],
        display: false,
        array: [{
            id: 1, name: 'madhu'
        },
        { id: 2, name: 'someone' }],
        updatedData : []
    }

    displayInfoHandler = (data) => {
        console.log(data);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + data)
            .then((response) => {
                //   console.log(response.data);
                //const res = response.data;
                this.setState({ updatedData: response.data });
                 console.log(this.state.updatedData);

            });

            console.log(this.state.display + " before");
        this.setState({ display: true});
        console.log(this.state.display);

  
    }


    modalCloseHandler = () => {
        this.setState({ display: false });
    }

    render() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // console.log(response.data)
                const compData = response.data.slice(0, 6);

                this.setState({ projectData: compData });
                ;
                // console.log(typeof(this.state.projectData));
            })

        // const data2 = [];
        // data2.push(this.state.projectData);
        return (
            //     data2.map((data,i) => {
            //  //     console.log(data[0].body);
            //       console.log(data[i]);
            //       console.log(i);
            this.state.projectData.map((data,i) => {
                //console.log(i);
                return (
                    <Aux key={i}>
                        <div className="col-sm-12 col-md-6 col-lg-6 porfolio">
                            <h4>{data.title}</h4>
                            <p>Project by <strong>{'Username' + data.id}</strong></p>
                            <button onClick={() => this.displayInfoHandler(data.id)} >View</button>
                        </div>
                        <Modal show={this.state.display} >
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