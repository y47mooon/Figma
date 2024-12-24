import React, { forwardRef, useEffect } from 'react';
import '../style/Works.css';

const Works = forwardRef((props, ref) => {
    useEffect(() => {
        const footerImage = document.querySelector('.footer-image');
        console.log('Footer image found:', footerImage);

        if (footerImage) {
            // 画像マップを作成
            const map = document.createElement('map');
            map.name = 'footer-nav';

            // エリアを作成
            const areas = [
                { coords: '80,162,130,187', href: '#', alt: 'TOP', scroll: 0 },
                { coords: '162,162,212,187', href: '#', alt: 'Service', scroll: 968 },
                { coords: '266,162,316,187', href: '#', alt: 'Flow', scroll: 2308 },
                { coords: '363,162,413,187', href: '#', alt: 'Works', scroll: 3985 }
            ];

            areas.forEach(area => {
                const areaElement = document.createElement('area');
                areaElement.shape = 'rect';
                areaElement.coords = area.coords;
                areaElement.href = area.href;
                areaElement.alt = area.alt;
                
                areaElement.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.scrollTo({
                        top: area.scroll,
                        behavior: 'smooth'
                    });
                });
                
                map.appendChild(areaElement);
            });

            // 画像にマップを適用
            footerImage.useMap = '#footer-nav';
            document.body.appendChild(map);
        }
    }, []);

    useEffect(() => {
        const cvImage2 = document.querySelector('.cv-image-2');
        if (cvImage2) {
            cvImage2.style.cursor = 'pointer'; // カーソルをポインターに変更
            cvImage2.addEventListener('click', () => {
                window.location.href = 'https://realice.jp'; // URLに遷移
            });
        }
    }, []);

    return (
        <div ref={ref}>
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
                {/*<path d="M0 325H1400V0H0V325Z" fill="white"/>*/}
            </svg>
            <img 
                src="/image/footer.png" 
                className="footer-image" 
                alt="footer" 
            />
            <div className="step-number-text-01">
                01
            </div>
            <div className="ai-character-conversation-text">
                AIキャラクターとの会話システムの開発
            </div>
            <div className="dena-company-text">
                DeNA株式会社
            </div>
            <div className="ai-capabilities-description-text">
                AIでできることを現時点の技術で把握し、新規事業に活かしていきたいという要望を小規模の開発でPOCを短サイクルで実現。<br />
                AI音声と音声+モーションの技術で価値提供を行なった。
            </div>
            <div className="step-number-text-02">
                02
            </div>
            <div className="ai-ocr-automation-text">
                AI OCRシステムを活用した帳票読み取りの自動化
            </div>
            <div className="nakamura-logistics-text">
                ナカムラロジスティクス株式会社
            </div>
            <div className="nakamura-logistics-description-text">
                実際の業務のヒアリングから行い、AIのOCRシステムを活用して伝票の読み取り工数を自動化した。<br />
                最大8名いた作業員を2名にまで削減
            </div>
        </div>
    );
});

export default Works; 