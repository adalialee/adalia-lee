import React, { useEffect } from "react";
import "./index.css";

function CrochetCreations() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div className="section c-container">
            <h1 className="p-header">Crochet Creations</h1>
            <p className="g-intro">
                Crocheting has strengthened my self-discipline, sharpened my algorithmic thinking, and become a creative outlet for crafting pieces that are both expressive and purposeful. While crochet might seem like a purely design-based hobby, it actually involves creatively technical aspects such as finding, calculating, and “debugging” stitch patterns strategically. After learning the basic stitches and patterns, I’ve transitioned to designing my own patterns, which challenges me to blend creativity with problem-solving.
            </p>
            <div className="c-list">
                <div className="spotify">
                    <img src="/adalia-lee/media/ducks.png" className="img-fluid" alt="ducks" loading="lazy" />
                    <img src="/adalia-lee/media/c4c.png" className="img-fluid" alt="c4c" loading="lazy" />
                    <img src="/adalia-lee/media/bird.png" className="img-fluid" alt="bird" loading="lazy" />
                    <img src="/adalia-lee/media/beanie.png" className="img-fluid" alt="beanie" loading="lazy" />
                    <img src="/adalia-lee/media/shirt.png" className="img-fluid" alt="shirt" loading="lazy" />
                    <img src="/adalia-lee/media/toffee.png" className="img-fluid" alt="hedgehog" loading="lazy" />
                </div>
                <div className="spotify">
                    <div className="others-top-right">
                        <img src="/adalia-lee/media/crabs.png" className="img-fluid" alt="crabs" loading="lazy" />
                        <img src="/adalia-lee/media/sun.png" className="img-fluid" alt="sun" loading="lazy" />
                        <img src="/adalia-lee/media/garlands.png" className="img-fluid" alt="garlands" loading="lazy" />
                    </div>
                    <div className="others-top-right">
                        <img src="/adalia-lee/media/frog.png" className="img-fluid" alt="frog" loading="lazy" />
                        <img src="/adalia-lee/media/headband.png" className="img-fluid" alt="headband" loading="lazy" />
                        <img src="/adalia-lee/media/bear.png" className="img-fluid" alt="bear" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>     
    );
}

export default CrochetCreations;