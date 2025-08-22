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
        <div key={index} className="e-content">
            <div className="e-subtitle">
                <h3>{subtitle}</h3>
                <div className="separator">
                    <hr className="line" />
                </div>
            </div>
            <div className="e-img-text">
                <img src={project.images[index]} className="img-fluid" alt="project" loading="lazy" />
                <p>{project.descriptions[index]}</p>
            </div>
        </div>
    ));

    return (
        <div className="section">
            <h1 className="p-header">{project.title}</h1>
            <div className="e-summaries">
                <p>{project.summary}</p>
                <p>
                    Here's the{" "}
                    <a href={project.link} style={{color: "var(--primary-dark)"}}>link</a> to
                    {project["link-description"]}
                </p>
            </div>
            {project.video && (
                <div style={{ 
                    width: project.video === "cat.mp4" ? "30%" : (project.video === "new-otic.mp4" ? "80%" : "30%"), 
                    margin: "auto"
                }}>
                    <video controls preload="metadata" style={{ width: "100%", height: "auto", maxWidth: "100%", display: "block" }}>
                        <source src={`/adalia-lee/media/${project.video}`} type="video/mp4" />
                    </video>
                </div>
            )}
            <div className="e-all">
                {projectContent}
            </div>
        </div>
    );
}

export default ExpandedCode;