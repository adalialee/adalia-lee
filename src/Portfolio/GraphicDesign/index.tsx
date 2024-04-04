import React, { useEffect } from "react";
import "./index.css";

function GraphicDesign() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return (
        <div className="g-all" style={{justifyContent: "center"}}>
            <p className="g-header" style={{paddingTop: '172px'}}>Graphic Design</p>
            <p className="g-subtitle">
                Wallpapers
            </p>
            <p className="g-summary">
                In most of my middle school and high school years, I was part of my schools' yearbook classes. One of my favorite perks of being in yearbook was gaining access to Adobe programs. I began with making yearbook icons, then added in designing my own phone and laptop wallpapers - these are a few of my favorites!
            </p>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '35vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="balloon.png" className="img-fluid" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="city.png" className="img-fluid" />
                </div>
                <div style={{ width: '35vw', marginRight: '5vw', height: '100%' }}>
                    <img src="road.png" className="img-fluid" />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5vw' }}>
                <img src="window.png" className="img-fluid" style={{ width: '60vw', marginLeft: '5vw', marginRight: '5vw' }}/>
            </div>

            <p className="g-subtitle" style={{paddingTop: '124px'}}>
                Spotify Covers
            </p>
            <p className="g-summary">
                I love listening to music, so I spend quite some time on Spotify. All of my public playlists' covers are designed by me - I have many more private playlists that I'll turn public once I have a cover I'm satisfied with.
            </p>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '45vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="bike.png" className="img-fluid" />
                </div>
                <div style={{ width: '45vw', marginRight: '5vw', height: '100%' }}>
                    <img src="desk.png" className="img-fluid" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5vw' }}>
                <div style={{ width: '45vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="train.png" className="img-fluid" />
                </div>
                <div style={{ width: '45vw', marginRight: '5vw', height: '100%' }}>
                    <img src="flowers.png" className="img-fluid" />
                </div>
            </div>
            <div style={{ display: 'flex', marginTop: '5vw' }}>
                <div style={{ width: '45vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="cafe.png" className="img-fluid" />
                </div>
                <div style={{ width: '45vw', marginRight: '5vw', height: '100%' }}>
                    <img src="drink.png" className="img-fluid" />
                </div>
            </div>

            <p className="g-subtitle" style={{paddingTop: '124px'}}>
                More Designs
            </p>
            <p className="g-summary">
                Here are a few more of my designs, including a flyer and design I made for my Color and Composition Tools course, the first icon I made for yearbook, and one of the designs where I had an increased focus on learning/using proper techniques.
            </p>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '75vw', marginLeft: '5vw', marginRight: '5vw' }}>
                    <img src="flyer.png" className="img-fluid" style={{marginBottom: '5vw'}}/>
                </div>
                <div style={{ width: '45vw', marginRight: '5vw', height: '100%' }}>
                    <img src="room.png" className="img-fluid" style={{marginBottom: '5vw'}} />
                    <img src="fruit.png" className="img-fluid" />
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '45vw', marginLeft: '5vw', marginRight: '5vw', height: '100%' }}>
                    <img src="running.png" className="img-fluid" style={{marginBottom: '5vw'}} />
                </div>
                <div style={{ width: '75vw', marginRight: '5vw' }}>
                    <img src="actor.png" className="img-fluid" style={{marginBottom: '5vw'}} />
                </div>
            </div>
        </div>     
    );
}

export default GraphicDesign;