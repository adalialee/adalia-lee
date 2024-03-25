import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Cards from '../Cards';

function Home() {
    return (
        <div>
            <div className="row intro">
                <div className="col-12 col-lg-6">
                    <img src="profile.png" className="img-fluid pfp"/>
                </div>
                <div className="col-12 col-lg-6 intro-text">
                    <div className="intro-content">
                        <p id="title">Hi, I’m Adalia!</p>
                        <p id="intro-text">I’m a second-year Computer Science and Design student with a concentration in Interaction Design at Northeastern University.</p>
                    </div>
                </div>
                <p className="goal">
                    My ultimate career goal is one in UI/UX Design because I love creating impactful and intuitive user interfaces while connecting with people. I also enjoy Front-End Software Development for websites and apps.
                </p>
            </div>
            <Cards/>
        </div>
    );
}

export default Home;