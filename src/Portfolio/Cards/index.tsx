import { useEffect } from "react";
import CardsList from "./List";

function Cards() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, []);
    return (
        <div style={{backgroundColor: "#DFE9FF", paddingTop: "124px", paddingBottom: "124px"}}>
            <CardsList/>
        </div>
    )
}

export default Cards;