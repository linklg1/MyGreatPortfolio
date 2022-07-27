import React from "react";

export default function Project({ project }) {
    const { title, repo, link, image } = project;

    return (
        <div key={title}>
            <div>
            <img 
            src={image}
            alt={`Screenshot of ${title} project`}
            />
            </div>
            <div>
                <h2>
                    {title}
                    <br />
                    <a href={link} target="_blank" rel="noreferrer">Link</a>
                    <br />
                    <a href={repo} target="_blank" rel="noreferrer">GitHub Repository</a>
                </h2>
                </div>
        </div>
    );
};