import React from "react";
import "./index.css";

interface ButtonMailtoProps {
    mailto: string;
    children: React.ReactNode;
}

const ButtonMailto: React.FC<ButtonMailtoProps> = ({ mailto, children }) => {
    return (
        <a href={`mailto:${mailto}`} className="mail">{children}</a>
    );
}

export default ButtonMailto;