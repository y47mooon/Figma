import React from 'react';
import '../style/Works.css';

const Works = () => {
    return (
        <div>
            <div className="works-title">
                開発した事例
            </div>
            <img src="/image/Rectangle 133.png" className="image-rectangle-133" alt="rectangle-133" />
            <img src="/image/img-2.png" className="image-img-2" alt="img-2" />
            <div className="examples-title">Examples developed by ReAlice</div>
            <img src="/image/AdobeStock_734952265 1.png" className="image-adobe-stock-734" alt="adobe-stock-734" />
            <svg 
                className="vector-shape-3" 
                xmlns="http://www.w3.org/2000/svg" 
                width="518" 
                height="230" 
                viewBox="0 0 518 230" 
                fill="none"
            >
                <path 
                    d="M2.01072e-05 -0.000534058L2.52549e-05 230L396.289 229.999L517.409 7.65381C519.505 4.28494 515.733 0.0738366 510.704 0.0738362L2.01072e-05 -0.000534058Z" 
                    fill="#E64646"
                />
            </svg>
            <img 
                src="/image/AdobeStock_485225812 1.png" 
                className="image-adobe-stock-485" 
                alt="adobe-stock-485"
                style={{
                    objectFit: 'cover'
                }}
            />
            <svg 
                className="vector-shape-4" 
                xmlns="http://www.w3.org/2000/svg" 
                width="648" 
                height="230" 
                viewBox="0 0 648 230" 
                fill="none"
            >
                <path 
                    d="M648 -0.000534058L648 230L121.711 229.999L0.590618 7.65382C-1.5049 4.28495 2.26701 0.073848 7.29624 0.0738475L648 -0.000534058Z" 
                    fill="#E64646"
                />
            </svg>
            <img src="/image/CV-2.png" className="cv-image-2" alt="cv-2" />
            <svg 
                className="footer-svg" 
                xmlns="http://www.w3.org/2000/svg" 
                width="1400" 
                height="325" 
                viewBox="0 0 1400 325" 
                fill="none"
            >
                <path d="M0 325H1400V0H0V325Z" fill="white"/>
            </svg>
            <img 
                src="/image/footer.png" 
                className="footer-image" 
                alt="footer" 
            />
        </div>
    );
};

export default Works; 