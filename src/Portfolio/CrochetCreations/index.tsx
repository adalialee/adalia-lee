import React, { useEffect } from "react";
import "./index.css";

function CrochetCreations() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div className="all" style={{justifyContent: "center"}}>
            <p className="header" style={{paddingTop: '172px'}}>Crochet Creations</p>
            <p className="summary">
                I wanted to learn how to crochet because I'd seen lots of cute posts on Instagram and my high school calculus teacher mentioned it. My sign to actually start was my senior year econ final project, where one of the options was to document the process of picking up a new skill. I started with following YouTube tutorials, but eventually picked up on the patterns. Now, I try to be more creative with my work since I can freehand crochet. Some of my facorite things to make are amigurumi plushies, clothes, and other accessories/decorations. Teaching people how to crochet and crocheting with my friends brings me lots of joy, too. In Code4Community, we planned three crochet nights to teach our memberes to make heart decorations for our Valentine's Day Prom, which was super fun and rewarding!
            </p>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="/adalia-lee/media/ducks.png" className="img-fluid" alt="ducks" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="/adalia-lee/media/c4c.png" className="img-fluid" alt="c4c" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="/adalia-lee/media/bird.png" className="img-fluid" alt="bird" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5vw' }}>
                <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="/adalia-lee/media/beanie.png" className="img-fluid" alt="beanie"/>
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="/adalia-lee/media/shirt.png" className="img-fluid" alt="shirt" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="/adalia-lee/media/toffee.png" className="img-fluid" alt="hedgehog" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5vw' }}>
            <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="/adalia-lee/media/crabs.png" className="img-fluid" alt="crabs" style={{ marginBottom: '5vw' }}/>
                    <img src="/adalia-lee/media/sun.png" className="img-fluid" alt="sun" style={{ marginBottom: '5vw' }}/>
                    <img src="/adalia-lee/media/garlands.png" className="img-fluid" alt="garlands"/>
                </div>
                <div style={{ width: '45vw', marginRight: '5vw', height: '100%' }}>
                    <img src="/adalia-lee/media/frog.png" className="img-fluid" alt="frog" style={{ marginBottom: '5vw' }} />
                    <img src="/adalia-lee/media/headband.png" className="img-fluid" alt="headband" style={{ marginBottom: '5vw' }}/>
                    <img src="/adalia-lee/media/bear.png" className="img-fluid" alt="bear" style={{marginBottom: '5vw'}}/>
                </div>
            </div>
        </div>     
    );
}

export default CrochetCreations;