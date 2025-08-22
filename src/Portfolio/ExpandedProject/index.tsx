import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productDesign } from "../Database";
import "./index.css";

function ExpandedProject() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { projectId } = useParams();
    const project = productDesign.find((project) => project.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    const projectContent = project.subtitles.map((subtitle, index) => (
        <div key={index} className="e-content">
            <div className="e-subtitle">
                <h3>{subtitle}</h3>
                <div className="separator">
                    <hr className="line" />
                </div>
            </div>
            <div className="e-img-text">
                {Array.isArray(project.images[index]) ? (
                    <div className="e-nested-imgs">
                        {(project.images[index] as string[]).map((nestedImg, nestedIndex) => (
                            <img
                                key={`${index}-${nestedIndex}`}
                                src={nestedImg}
                                className="img-fluid e-nested-img"
                                alt={`project ${index}-${nestedIndex}`}
                                loading="lazy"
                            />
                        ))}
                    </div>
                ) : (
                    <img
                        src={project.images[index] as string}
                        className="img-fluid e-img"
                        alt={`project ${index}`}
                        loading="lazy"
                    />
                )}
                <p>{project.descriptions[index]}</p>
            </div>
        </div>
    ));

    return (
        <div className="section">
            <h1 className="p-header">{project.title}</h1>
            <p className="e-intro">{project.summary}</p>
            <div className="e-all">
                {projectContent}
            </div>
        </div>
    );
}

export default ExpandedProject;
