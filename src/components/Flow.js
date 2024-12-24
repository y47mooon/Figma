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
            <div className="requirement-definition-text">
                要件定義・設計
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
            <div className="step-number-text">
                02
            </div>
            <div className="design-specification-text">
                ヒアリングした内容をもとに、<br />
                開発に必要な仕様やステップを設計していきます。
            </div>
            <div className="step-number-text-03">
                03
            </div>
            <div className="implementation-text">
                実装
            </div>
            <div className="implementation-description-text">
                設計された仕様に沿って、最新技術動向を常に把握した上で、<br />
                時代に合わせた実装を行います。
            </div>
            <div className="step-number-text-04">
                04
            </div>
            <div className="testing-and-validation-text">
                検証・テスト運用
            </div>
            <div className="test-item-description-text">
                既存フローに合わせたテスト項目を作成し、<br />
                サービス品質向上のために検証を行います。
            </div>
            <div className="step-number-text-05">
                05
            </div>
            <div className="operation-and-expansion-text">
                運用・機能拡張
            </div>
            <div className="continuous-operation-description-text">
                継続した運用はもちろん、<br />
                サービスの成長に即して必要な機能を定常的に開発していきます。
            </div>
            <img src="/image/meeting.png" className="image-meeting" alt="Meeting" />
            <img src="/image/Rectangle 135-2.png" className="image-rectangle-135-2" alt="Rectangle 135-2" />
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-2" alt="Rectangle 136-2" />
            <img src="/image/workplace-8793724_1280 1.png" className="image-workplace" alt="Workplace" />
            <img src="/image/Rectangle 135-6.png" className="image-rectangle-135-6" alt="Rectangle 135-6" />
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-3" alt="Rectangle 136-3" />
            <img src="/image/AdobeStock_256368647 1.png" className="image-adobe-stock" alt="Adobe Stock" />
            <img src="/image/Rectangle 135-4.png" className="image-rectangle-135-4" alt="Rectangle 135-4" />
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-4" alt="Rectangle 136-4" />
            <img src="/image/phone-958066_1280 1.png" className="image-phone" alt="Phone" />
            <img src="/image/Rectangle 135-5.png" className="image-rectangle-135-5" alt="Rectangle 135-5" />
            <img src="/image/Rectangle 136.png" className="image-rectangle-136-5" alt="Rectangle 136-5" />
        </>
    );
};

export default Flow; 