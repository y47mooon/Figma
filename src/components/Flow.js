import React from 'react';
import '../style/Flow.css';

const Flow = () => {
    return (
        <>
            <div className="flow-label">
                お問い合わせから開発のフロー
            </div>
            <div className="realice-flow-text">
                ReAlice development flow.
            </div>
            <img src="/image/pen.png" className="image-pen" alt="pen" />
            <img src="/image/Rectangle 136.png" className="image-rectangle" alt="rectangle" />
            <div className="custom-text">
                01
            </div>
            <svg className="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 324" fill="none">
                <g filter="url(#filter0_b_1567_4102)">
                    <path d="M0 0H400L310 324H0V0Z" fill="#E64646" fillOpacity="0.8"/>
                </g>
                <defs>
                    <filter id="filter0_b_1567_4102" x="-8" y="-8" width="416" height="340" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1567_4102"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1567_4102" result="shape"/>
                    </filter>
                </defs>
            </svg>
            <div className="hearing-text">ヒアリング</div>
            <div className="staff-hearing-text">
                リアリススタッフより、AIやアプリなどのシステム開発について、本質的な課題からヒアリングいたします。
            </div>
            <img src="/image/meeting.png" className="image-meeting" alt="meeting" />
            <img src="/image/Rectangle 135-2.png" className="image-rectangle-135-2" alt="rectangle-135-2" />
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-2" alt="rectangle-136-2" />
            <img src="/image/workplace-8793724_1280 1.png" className="image-workplace" alt="workplace" />
            <img src="/image/Rectangle 135-3.png" className="image-rectangle-135-3" alt="rectangle-135-3" /> 
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-3" alt="rectangle-136-3" />
            <img src="/image/AdobeStock_256368647 1.png" className="image-adobe-stock" alt="adobe stock" />
            <img src="/image/Rectangle 135-4.png" className="image-rectangle-135-4" alt="rectangle-135-4" />
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-4" alt="rectangle-136-4" />
            <img src="/image/phone-958066_1280 1.png" className="image-phone" alt="phone" /> 
            <img src="/image/Rectangle 135-5.png" className="image-rectangle-135-5" alt="rectangle-135-5" /> 
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-5" alt="rectangle-136-5" />
        </>
    );
};

export default Flow; 