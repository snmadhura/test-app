import React, { Component } from 'react';
import axios from 'axios';
import './projectPortfolio.css';
import Aux from '../Auxilliary/Auxilliary';
//import ProjectDetails from '';
import Modal from '../Layout/UI/Modals/Modals';

class projectPortfolio extends Component {

    state = {
        projectData: [],
        display: false
    }

    displayInfoHandler = (data) => {
        console.log(data);
        axios.get('https://jsonplaceholder.typicode.com/posts/' + data)
            .then((response) => {
                //  console.log(response.data);
    const res =response.data
            })
            
        this.setState({ display: true });

    }


    modalCloseHandler = () => {
        this.setState({ display: false });
    }

    render() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                //console.log(response.data)
                const compData = response.data.slice(0, 6);
                this.setState({ projectData: compData });
                // console.log(this.state.projectData);
            });
        return (
            this.state.projectData.map(data => {
                return (
                    <Aux key={data.id}>
                        <div className="col-sm-12 col-md-6 col-lg-6 porfolio" >
                            <h4>{data.title}</h4>
                            <p>Project by <strong>{data.name}</strong></p>
                            <button onClick={() => this.displayInfoHandler(data.id)} >View</button>
                        </div>
                    </Aux>
                )
            })

        );
    }

}

export default projectPortfolio;