import React from 'react';
import '../css/LandingPage.css';

export default function LandingPage() {
	return (
        <>
            <div className="noise-overlay"></div>
            <div className="landing-page">
                <div className="header1">
                    <img src="/images/Ellipse1.png" alt="Ellipse1" />
                </div>
                <div className="header2">
                    <img src="/images/snoozie_round.png" alt="snoozie_round" />
                </div>
                <div className="cloud left"> <img src="/images/cloud1.png" alt="cloud1" /> </div>
                <div className="cloud right"> <img src="/images/cloud2.png" alt="cloud2" /> </div>
                <div className="cloud top"> <img src="/images/cloud3.png" alt="cloud3" /> </div>
                <div className="title-container">
                    <div className="title"> <img src="/images/title.png" alt="title" /></div>
                    <p>Cutiest Cozyus Maximus</p>
                </div>
                <div className="content-container">
                    <div className="view_docs" onClick={() => window.open("/images/Snoozies.pdf", "_blank")}> <img src="/images/view_docs.png" alt="view_docs" /></div>
                    <div className="x" onClick={() => window.open("https://x.com/snooziesNFT", "_blank")}> <img src="/images/x.png" alt="x" /></div>
                </div>
                <div className="listCloud"> <img src="/images/listCloud.png" alt="listCloud" /></div>
                <div className="tree2"> <img src="/images/tree2.png" alt="tree2" /></div>
                <div className="leaf"> <img src="/images/leaf.png" alt="leaf" /></div>
                <div className="tree1"> <img src="/images/tree2.png" alt="tree1" /></div>
                <div className="bush"> <img src="/images/bush.png" alt="bush" /></div>
                <div className="montain"> <img src="/images/montain.png" alt="montain" /></div>
                <div className="montain2"> <img src="/images/montain2.png" alt="montain2" /></div>
                <div className="picnic"> <img src="/images/picnic.png" alt="picnic" /></div>
                <div className="picnic2"> <img src="/images/picnic2.png" alt="picnic2" /></div>

            </div>
        </>
	);
}
