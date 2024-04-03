import React from "react";
import { useParams } from "react-router-dom";
import { productDesign } from "../Database";
import "./index.css";

function ExpandedProject() {
    const { projectId } = useParams();
    const project = productDesign.find((project) => project.id === projectId);

    if (!project) {
        return <div>Project not found</div>;
    }

    const projectContent = project.subtitles.map((subtitle, index) => (
        <div key={index}>
            <div className="e-subtitle">
                <p>{subtitle}</p>
                {<hr style={{ height: "2px", opacity: "1", backgroundColor: "#9FB9F2", border: "none", marginTop: "16px" }} />}
            </div>
            <img src={project.images[index]} className="img-fluid" />
            <div className="e-summary" style={{textAlign: "left"}}>
                <p>{project.descriptions[index]}</p>
            </div>
        </div>
    ));

    return (
        <div className="all">
            <div className="e-header" style={{paddingTop: "48px"}}>
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