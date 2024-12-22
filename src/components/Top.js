import React, { useEffect } from 'react';
import '../style/globals.css';
import '../style/top.css'
import '../style/Flow.css';
import Service from './Service';
import Flow from './Flow';
import Works from './Works';

const Top = () => {
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
    positionRedSquare();
    positionWhiteLineIcon();
    positionReAliceText();
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
    document.body.appendChild(serviceText);
  }

  function positionFlowText() {
    const flowText = document.createElement('div');
    flowText.className = 'flow-text';
    flowText.textContent = 'Flow';
    flowText.style.position = 'absolute';
    flowText.style.top = '39px';
    flowText.style.left = '1136px';
    document.body.appendChild(flowText);
  }

  function positionWorksText() {
    const worksText = document.createElement('div');
    worksText.className = 'works-text';
    worksText.textContent = 'Works';
    worksText.style.position = 'absolute';
    worksText.style.top = '39.5px';
    worksText.style.left = '1233px';
    document.body.appendChild(worksText);
  }

  function positionContactText() {
    const contactText = document.createElement('div');
    contactText.className = 'contact-text';
    contactText.textContent = 'Contact';
    contactText.style.position = 'absolute';
    contactText.style.top = '40px';
    contactText.style.left = '1322px';
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
    document.body.appendChild(serviceButtonText);
  }

  function positionDevelopmentFlowText() {
    const developmentFlowText = document.createElement('div');
    developmentFlowText.className = 'development-flow-text';
    developmentFlowText.textContent = '開発フロー';
    developmentFlowText.style.position = 'absolute';
    developmentFlowText.style.top = '64px';
    developmentFlowText.style.left = '1122px';
    document.body.appendChild(developmentFlowText);
  }

  function positionCaseStudyText() {
    const caseStudyText = document.createElement('div');
    caseStudyText.className = 'case-study-text';
    caseStudyText.textContent = '開発事例';
    caseStudyText.style.position = 'absolute';
    caseStudyText.style.top = '63.5px';
    caseStudyText.style.left = '1227px';
    document.body.appendChild(caseStudyText);
  }

  function positionInquiryText() {
    const inquiryText = document.createElement('div');
    inquiryText.className = 'inquiry-text';
    inquiryText.textContent = 'お問い合わせ';
    inquiryText.style.position = 'absolute';
    inquiryText.style.top = '64px';
    inquiryText.style.left = '1309px';
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

  function positionRedSquare() {
    const redSquare = document.createElement('div');
    redSquare.className = 'red-square';
    document.body.appendChild(redSquare);
  }

  function positionWhiteLineIcon() {
    const whiteLineIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    whiteLineIcon.setAttribute("class", "white-line-icon");
    whiteLineIcon.setAttribute("width", "8");
    whiteLineIcon.setAttribute("height", "14");
    whiteLineIcon.setAttribute("viewBox", "0 0 8 14");
    whiteLineIcon.innerHTML = '<path d="M1 1L7 7L1 13" stroke="white"/>';

    document.body.appendChild(whiteLineIcon);
  }

  function positionReAliceText() {
    const realiceText = document.createElement('div');
    realiceText.className = 'realice-text';
    realiceText.textContent = '運営会社・ReAliceについて';
    document.body.appendChild(realiceText);
  }

  return (
    <div className="top-container">
      <div className="custom-position"></div>
      <Service />
      <Flow />
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
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text'
          }}
        >
          AI Technology<br />
          for Unleashing Creativity
        </div>
      </div>
      <div className="new-class"></div>
      <div className="left-container">
      </div>
      <div className="new-right-container"></div>
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
  );
};

export default Top;
