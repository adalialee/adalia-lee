import { useEffect } from "react";
import CardsList from "./List";

function Cards() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    return (
        <div style={{backgroundColor: "#DFE9FF", paddingTop: "7.75em", paddingBottom: "7.75em"}}>
            <CardsList/>
        </div>
    )
}

export default Cards;