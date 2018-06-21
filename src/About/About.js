import React from 'react';

const about = () => {
    return (
        <div className="container">
            <h2 className="text-center text-uppercase text-white">About</h2>
            <hr className="star-light mb-5" />
            <div className="row">
                <div className="col-lg-4 ml-auto">
                    <p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
                </div>
                <div className="col-lg-4 mr-auto">
                    <p className="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
                </div>
            </div>
        </div>
    );
}

export default about;