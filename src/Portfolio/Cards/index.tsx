import { useEffect } from "react";
import CardsList from "./List";

function Cards() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <CardsList/>
    )
}

export default Cards;