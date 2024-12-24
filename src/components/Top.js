import React, { useEffect, forwardRef } from 'react';
import '../style/globals.css';
import '../style/top.css'
import '../style/Flow.css';
import Service from './Service';
import Flow from './Flow';
import Works from './Works';

const Top = forwardRef((props, ref) => {
  useEffect(() => {
    positionTopText();
    positionServiceText();
    positionFlowText();
    positionWorksText();
    positionContactText();
    positionTopButtonText();
    positionServiceButtonText();
    positionDevelopmentFlowText();
    positionCaseStudyText();
    positionInquiryText();
    positionVectorIcon();
    positionVectorIcon2();
    positionButtonImage();
  }, []);

  function positionTopText() {
    const topText = document.createElement('div');
    topText.className = 'top-text';
    topText.textContent = 'TOP';
    topText.style.position = 'absolute';
    topText.style.top = '39px';
    topText.style.left = '950px';
    document.body.appendChild(topText);
  }

  function positionServiceText() {
    const serviceText = document.createElement('div');
    serviceText.className = 'service-text';
    serviceText.textContent = 'Service';
    serviceText.style.position = 'absolute';
    serviceText.style.top = '39px';
    serviceText.style.left = '1032px';
    serviceText.style.cursor = 'pointer';
    serviceText.style.zIndex = '9999';
    
    serviceText.addEventListener('click', (e) => {
        console.log('Service text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 968,  // Serviceセクションの位置
            behavior: 'smooth'
        });
        console.log('Scroll executed to service section');
    });
    
    document.body.appendChild(serviceText);
  }

  function positionFlowText() {
    const flowText = document.createElement('div');
    flowText.className = 'flow-text';
    flowText.textContent = 'Flow';
    flowText.style.position = 'absolute';
    flowText.style.top = '39px';
    flowText.style.left = '1136px';
    flowText.style.cursor = 'pointer';
    flowText.style.zIndex = '9999';
    
    flowText.addEventListener('click', (e) => {
        console.log('Flow text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 2308,  // お問い合わせからの開発のフローの位置
            behavior: 'smooth'
        });
        console.log('Scroll executed to flow section');
    });
    
    document.body.appendChild(flowText);
  }

  function positionWorksText() {
    const worksText = document.createElement('div');
    worksText.className = 'works-text';
    worksText.textContent = 'Works';
    worksText.style.position = 'absolute';
    worksText.style.top = '39.5px';
    worksText.style.left = '1233px';
    worksText.style.cursor = 'pointer';
    worksText.style.zIndex = '9999';
    
    worksText.addEventListener('click', (e) => {
        console.log('Works text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 3985,  // 開発事例と同じ位置
            behavior: 'smooth'
        });
        console.log('Scroll executed to works section');
    });
    
    document.body.appendChild(worksText);
  }

  function positionContactText() {
    const contactText = document.createElement('div');
    contactText.className = 'contact-text';
    contactText.textContent = 'Contact';
    contactText.style.position = 'absolute';
    contactText.style.top = '40px';
    contactText.style.left = '1322px';
    contactText.style.cursor = 'pointer';
    contactText.style.zIndex = '9999';
    
    contactText.addEventListener('click', (e) => {
        console.log('Contact text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 1500,  // CV画像の実際の位置に修正
            behavior: 'smooth'
        });
        console.log('Scroll executed to CV image');
    });
    
    document.body.appendChild(contactText);
  }

  function positionTopButtonText() {
    const topButtonText = document.createElement('div');
    topButtonText.className = 'top-button-text';
    topButtonText.textContent = 'トップへ';
    topButtonText.style.position = 'absolute';
    topButtonText.style.top = '64px';
    topButtonText.style.left = '938px';
    document.body.appendChild(topButtonText);
  }

  function positionServiceButtonText() {
    const serviceButtonText = document.createElement('div');
    serviceButtonText.className = 'service-button-text';
    serviceButtonText.textContent = 'サービス';
    serviceButtonText.style.position = 'absolute';
    serviceButtonText.style.top = '64px';
    serviceButtonText.style.left = '1030px';
    serviceButtonText.style.cursor = 'pointer';
    serviceButtonText.style.zIndex = '9999';
    
    serviceButtonText.addEventListener('click', (e) => {
        console.log('Service text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 968,  // Serviceセクションの位置
            behavior: 'smooth'
        });
        console.log('Scroll executed to service section');
    });
    
    document.body.appendChild(serviceButtonText);
  }

  function positionDevelopmentFlowText() {
    const developmentFlowText = document.createElement('div');
    developmentFlowText.className = 'development-flow-text';
    developmentFlowText.textContent = '開発フロー';
    developmentFlowText.style.position = 'absolute';
    developmentFlowText.style.top = '64px';
    developmentFlowText.style.left = '1122px';
    developmentFlowText.style.cursor = 'pointer';
    developmentFlowText.style.zIndex = '9999';
    
    developmentFlowText.addEventListener('click', (e) => {
        console.log('Development flow text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 2308,  // お問い合わせからの開発のフローの位置
            behavior: 'smooth'
        });
        console.log('Scroll executed to flow section');
    });
    
    document.body.appendChild(developmentFlowText);
  }

  function positionCaseStudyText() {
    const caseStudyText = document.createElement('div');
    caseStudyText.className = 'case-study-text';
    caseStudyText.textContent = '開発事例';
    caseStudyText.style.position = 'absolute';
    caseStudyText.style.top = '63.5px';
    caseStudyText.style.left = '1227px';
    caseStudyText.style.cursor = 'pointer';
    caseStudyText.style.zIndex = '9999';
    
    caseStudyText.addEventListener('click', (e) => {
        console.log('Works text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 3985,  // Worksセクションの位置
            behavior: 'smooth'
        });
        console.log('Scroll executed to works section');
    });
    
    document.body.appendChild(caseStudyText);
  }

  function positionInquiryText() {
    const inquiryText = document.createElement('div');
    inquiryText.className = 'inquiry-text';
    inquiryText.textContent = 'お問い合わせ';
    inquiryText.style.position = 'absolute';
    inquiryText.style.top = '63.5px';
    inquiryText.style.left = '1310px';
    inquiryText.style.cursor = 'pointer';
    inquiryText.style.zIndex = '9999';
    
    inquiryText.addEventListener('click', (e) => {
        console.log('Inquiry text clicked!');
        e.preventDefault();
        
        window.scrollTo({
            top: 1500,  // CV画像の実際の位置に修正
            behavior: 'smooth'
        });
        console.log('Scroll executed to CV image');
    });
    
    document.body.appendChild(inquiryText);
  }

  function positionVectorIcon() {
    const vectorIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    vectorIcon.setAttribute("class", "vector-icon");
    vectorIcon.setAttribute("width", "14");
    vectorIcon.setAttribute("height", "17");
    vectorIcon.setAttribute("viewBox", "0 0 14 17");
    vectorIcon.innerHTML = '<path d="M12.4909 14.7493L4.96783 16.7651C4.67848 16.8426 4.38557 16.714 4.32085 16.4724L0.463134 2.07526C-0.245303 -0.375761 0.787477 -0.186461 2.12156 1.3202L12.946 13.7471C13.2424 14.0819 13.0214 14.6072 12.4909 14.7493Z" fill="#E64646"/>';
    
    document.body.appendChild(vectorIcon);
  }

  function positionVectorIcon2() {
    const vectorIcon2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    vectorIcon2.setAttribute("class", "vector-icon-2");
    vectorIcon2.setAttribute("width", "11");
    vectorIcon2.setAttribute("height", "18");
    vectorIcon2.setAttribute("viewBox", "0 0 11 18");
    vectorIcon2.innerHTML = '<path d="M0.750355 0.992982L8.48336 0.0651998C8.78078 0.0295159 9.05246 0.198423 9.08226 0.446727L10.8578 15.2456C11.2112 17.7724 10.2158 17.4385 9.109 15.7577L0.157656 1.92048C-0.0882908 1.54698 0.205079 1.0584 0.750355 0.992982Z" fill="#E64646"/>';
    
    document.body.appendChild(vectorIcon2);
  }

  function positionButtonImage() {
    const buttonImage = document.createElement('img');
    buttonImage.className = 'btn-image';
    buttonImage.src = '/image/btn.png';
    buttonImage.alt = 'ボタン画像';
    document.body.appendChild(buttonImage);
  }

  const handleServiceClick = () => {
    if (props.serviceRef.current) {
      props.serviceRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref}>
      <div className="top-container">
        <div className="left-container">
          <img 
            src="/image/left.png" 
            alt="left" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }} 
          />
        </div>
        <div className="new-right-container">
          <img 
            src="/image/right.png" 
            alt="right" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              clipPath: 'path("M30 0 C20 0 0 10 0 53 L364.537 735.731 C376.737 765.76 406.737 765.771 406.737 765.771 L406.736 0 L40 0")',
              borderTopLeftRadius: '40px',
              borderTopRightRadius: '20px'
            }} 
          />
        </div>
        <div className="custom-position"></div>
    
        <Service ref={props.serviceRef} />
        <Flow ref={props.flowRef} />
        <img 
          src="/image/logo.svg"
          alt="Logo"
          className="logo-top"
        />
        <img 
          src="/image/img.png"
          alt="Image"
          className="custom-logo"
        />
        <div className="creative-group">
          <div 
            className="creative-text"
            style={{ 
              WebkitTextFillColor: 'transparent',
              backgroundImage: `url('/image/back.png')`,
              backgroundColor: '#5A1A1A',
              backgroundBlendMode: 'screen',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              textShadow: 'none',
              border: 'none',
              outline: 'none'
            }}
          >
            AI Technology<br />
            for Unleashing Creativity
          </div>
        </div>
        <div className="creative-ai">
          創造力を引き出すAIテクノロジー
        </div>
        <div className="description-text">
          ReAlice Lab（仮）は、サービスのプレゼンスをあげるためにAIの力を最大限に活かし、<br />
          過去実績から培った知見と高度な技術力で、クリエイティブなAI体を実現する開発チーム<br />
          を堤供します。
        </div>
        <Works />
      </div>
    </div>
  );
});

export default Top;
