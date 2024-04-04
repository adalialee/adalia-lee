import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { softwareDevelopment } from "../Database";
import "./index.css";

function ExpandedCode() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    const { projectId } = useParams();
    const project = softwareDevelopment.find((project) => project.id === projectId);

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
                <p>
                    Here's the{" "}
                    <a href={project.link} style={{color: "#6A8FE1"}}>link</a> to
                    {project["link-description"]}
                </p>
            </div>
            {project.video && (
                <div style={{width: "30%", margin: "auto", marginBottom: "124px"}}>
                    <video controls style={{ width: "100%" }}>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
            )}
            {projectContent}
        </div>
    );
}

export default ExpandedCode;