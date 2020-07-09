import React from 'react';

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod accusantium velit fuga nobis quia ratione ea architecto deserunt soluta, similique sapiente labore, magnam dolorem deleniti voluptatibus. Voluptates laborum impedit reprehenderit.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Sanjuron</div>
                    <div>8 juillet</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;