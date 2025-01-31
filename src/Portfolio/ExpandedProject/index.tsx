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
        <div key={index}>
            <div className="e-subtitle">
                <p>{subtitle}</p>
                <hr
                    style={{
                        height: "2px",
                        opacity: "1",
                        backgroundColor: "#9FB9F2",
                        border: "none",
                        marginTop: "16px",
                    }}
                />
            </div>
            {Array.isArray(project.images[index]) ? (
                (project.images[index] as string[]).map((nestedImg, nestedIndex) => (
                    <img
                        key={`${index}-${nestedIndex}`}
                        src={nestedImg}
                        className="img-fluid"
                        alt={`project ${index}-${nestedIndex}`}
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            marginBottom: "124px",
                        }}
                    />
                ))
            ) : (
                <img
                    src={project.images[index] as string}
                    className="img-fluid"
                    alt={`project ${index}`}
                    style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        marginBottom: "36px",
                    }}
                />
            )}
            <div className="e-summary" style={{ textAlign: "left" }}>
                <p>{project.descriptions[index]}</p>
            </div>
        </div>
    ));

    return (
        <div className="all">
            <div className="e-header" style={{ paddingTop: "48px" }}>
                <p>{project.title}</p>
            </div>
            <div className="e-summary">
                <p>{project.summary}</p>
            </div>
            {projectContent}
        </div>
    );
}

export default ExpandedProject;
