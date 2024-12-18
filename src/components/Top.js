import React from 'react';
import '../style/globals.css';
import '../style/top.css'
import Service from './Service';

const Top = () => {
  return (
    <div className="top-container">
      <div className="custom-position"></div>
      <Service />
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
        過去実績から培った知見と高度な技術力で、クリエイティブなAI体験を実現する開発チーム<br />
        を提供します。
      </div>
    </div>
  );
};

export default Top;
