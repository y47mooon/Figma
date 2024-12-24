import React, { useEffect } from 'react';
import '../style/globals.css';
import '../style/Service.css';

const Service = () => {
  useEffect(() => {
    positionServiceIcon();
    positionServiceIconOffset();
    positionServiceIconLeft();
    positionDxText();
    positionGameDevText();
    positionAutomationDescText();
    positionDxDescText();
    positionStadiaControllerIcon();
    positionSyncDesktopIcon();
    positionMemoryIcon();
  }, []);

  function positionServiceIcon() {
    const serviceIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    serviceIcon.setAttribute("class", "service-icon");
    serviceIcon.setAttribute("width", "155");
    serviceIcon.setAttribute("height", "279");
    serviceIcon.setAttribute("viewBox", "0 0 155 279");
    serviceIcon.innerHTML = '<path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"/>';
    
    serviceIcon.style.top = '234px';  // 1202px - 968px
    serviceIcon.style.left = '868px';
    serviceIcon.style.position = 'absolute';
    
    const serviceContainer = document.querySelector('.service-container');
    if (serviceContainer) {
        serviceContainer.appendChild(serviceIcon);
    }
  }

  function positionServiceIconOffset() {
    const serviceIconOffset = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    serviceIconOffset.setAttribute("class", "service-icon-offset");
    serviceIconOffset.setAttribute("width", "155");
    serviceIconOffset.setAttribute("height", "279");
    serviceIconOffset.setAttribute("viewBox", "0 0 155 279");
    serviceIconOffset.innerHTML = '<path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"/>';
    
    serviceIconOffset.style.top = '234px';  // 1202px - 968px
    serviceIconOffset.style.left = '615px';
    serviceIconOffset.style.position = 'absolute';
    
    const serviceContainer = document.querySelector('.service-container');
    if (serviceContainer) {
        serviceContainer.appendChild(serviceIconOffset);
    }
  }

  function positionServiceIconLeft() {
    const serviceIconLeft = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    serviceIconLeft.setAttribute("class", "service-icon-left");
    serviceIconLeft.setAttribute("width", "155");
    serviceIconLeft.setAttribute("height", "279");
    serviceIconLeft.setAttribute("viewBox", "0 0 155 279");
    serviceIconLeft.innerHTML = '<path d="M146.211 -1.77354e-05L6.55479 0.507233C3.0253 0.507233 2.41692e-05 2.53613 2.39032e-05 5.5795L2.68254e-07 275.932C2.19518e-09 278.975 6.55477 280.497 8.57162 276.946L154.289 9.13011C156.81 5.07228 152.272 1.33121e-05 146.222 1.27831e-05L146.211 -1.77354e-05Z" fill="#FFA4A4"/>';
    
    serviceIconLeft.style.top = '234px';  // 1202px - 968px
    serviceIconLeft.style.left = '347px';
    serviceIconLeft.style.position = 'absolute';
    
    const serviceContainer = document.querySelector('.service-container');
    if (serviceContainer) {
        serviceContainer.appendChild(serviceIconLeft);
    }
  }

  // サービスアイコンを定義する関数
  function createStadiaControllerIcon() {
    const stadiaControllerIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    stadiaControllerIcon.setAttribute("class", "stadia-controller-icon");
    stadiaControllerIcon.setAttribute("width", "63");
    stadiaControllerIcon.setAttribute("height", "63");
    stadiaControllerIcon.setAttribute("viewBox", "0 0 63 63");
    stadiaControllerIcon.innerHTML = '<path d="M12.4031 51.8438C9.92951 51.8438 7.82622 50.9705 6.09329 49.224C4.35991 47.4771 3.46632 45.3499 3.41251 42.8426C3.41251 42.4725 3.43022 42.1074 3.46566 41.7473C3.5011 41.3873 3.56257 41.0189 3.65007 40.6422L9.16257 18.5922C9.73701 16.3798 10.9064 14.5873 12.6709 13.2149C14.4353 11.8425 16.4461 11.1562 18.7031 11.1562H44.2969C46.5539 11.1562 48.5647 11.8425 50.3291 13.2149C52.0936 14.5873 53.263 16.3798 53.8374 18.5922L59.3499 40.6422C59.4374 41.0189 59.5099 41.3982 59.5672 41.7802C59.6245 42.1621 59.6531 42.5381 59.6531 42.9082C59.6531 45.4156 58.7689 47.5317 57.0006 49.2568C55.2318 50.9814 53.0979 51.8438 50.5989 51.8438C48.8777 51.8438 47.2887 51.392 45.8319 50.4886C44.3745 49.5847 43.269 48.3604 42.5152 46.8156L40.6521 42.9844C40.383 42.4375 39.9792 42.0273 39.4406 41.7539C38.9021 41.4805 38.3333 41.3437 37.7344 41.3437H25.2656C24.6711 41.3437 24.1034 41.4783 23.5627 41.7473C23.0219 42.0168 22.617 42.4292 22.3479 42.9844L20.4848 46.8156C19.7481 48.3774 18.6454 49.6059 17.1767 50.5011C15.708 51.3962 14.1168 51.8438 12.4031 51.8438ZM35.4375 28.5718C36.0802 28.5718 36.6279 28.3456 37.0808 27.8932C37.5331 27.4404 37.7593 26.8927 37.7593 26.25C37.7593 25.6073 37.5331 25.0596 37.0808 24.6068C36.6279 24.1544 36.0802 23.9282 35.4375 23.9282C34.7948 23.9282 34.2471 24.1544 33.7943 24.6068C33.3419 25.0596 33.1157 25.6073 33.1157 26.25C33.1157 26.8927 33.3419 27.4404 33.7943 27.8932C34.2471 28.3456 34.7948 28.5718 35.4375 28.5718ZM40.6875 23.3218C41.3302 23.3218 41.8779 23.0956 42.3308 22.6432C42.7831 22.1904 43.0093 21.6427 43.0093 21C43.0093 20.3573 42.7831 19.8096 42.3308 19.3568C41.8779 18.9044 41.3302 18.6782 40.6875 18.6782C40.0448 18.6782 39.4971 18.9044 39.0443 19.3568C38.5919 19.8096 38.3657 20.3573 38.3657 21C38.3657 21.6427 38.5919 22.1904 39.0443 22.6432C39.4971 23.0956 40.0448 23.3218 40.6875 23.3218ZM40.6875 33.8218C41.3302 33.8218 41.8779 33.5956 42.3308 33.1432C42.7831 32.6904 43.0093 32.1427 43.0093 31.5C43.0093 30.8573 42.7831 30.3096 42.3308 29.8567C41.8779 29.4044 41.3302 29.1782 40.6875 29.1782C40.0448 29.1782 39.4971 29.4044 39.0443 29.8567C38.5919 30.3096 38.3657 30.8573 38.3657 31.5C38.3657 32.1427 38.5919 32.6904 39.0443 33.1432C39.4971 33.5956 40.0448 33.8218 40.6875 33.8218ZM45.9375 28.5718C46.5802 28.5718 47.1279 28.3456 47.5808 27.8932C48.0331 27.4404 48.2593 26.8927 48.2593 26.25C48.2593 25.6073 48.0331 25.0596 47.5808 24.6068C47.1279 24.1544 46.5802 23.9282 45.9375 23.9282C45.2948 23.9282 44.7471 24.1544 44.2943 24.6068C43.8419 25.0596 43.6157 25.6073 43.6157 26.25C43.6157 26.8927 43.8419 27.4404 44.2943 27.8932C44.7471 28.3456 45.2948 28.5718 45.9375 28.5718ZM22.3112 32.4089C22.7631 32.4089 23.1372 32.261 23.4334 31.9653C23.7296 31.6695 23.8777 31.2957 23.8777 30.8438V27.8152H26.9063C27.3582 27.8152 27.732 27.6673 28.0278 27.3715C28.3235 27.0762 28.4714 26.7028 28.4714 26.2513C28.4714 25.7994 28.3235 25.4253 28.0278 25.1291C27.732 24.8329 27.3582 24.6848 26.9063 24.6848H23.8777V21.6562C23.8777 21.2043 23.7298 20.8305 23.434 20.5347C23.1387 20.239 22.7653 20.0911 22.3138 20.0911C21.8619 20.0911 21.4878 20.239 21.1916 20.5347C20.8954 20.8305 20.7474 21.2043 20.7474 21.6562V24.6848H17.7188C17.2668 24.6848 16.893 24.8327 16.5972 25.1285C16.3015 25.4238 16.1536 25.7972 16.1536 26.2487C16.1536 26.7006 16.3015 27.0747 16.5972 27.3709C16.893 27.6671 17.2668 27.8152 17.7188 27.8152H20.7474V30.8438C20.7474 31.2957 20.8952 31.6695 21.191 31.9653C21.4863 32.261 21.8597 32.4089 22.3112 32.4089Z" fill="#E64646"/>';
    
    return stadiaControllerIcon;
  }

  // メインコンテナにアイコンを追加する関数
  function positionStadiaControllerIcon() {
    const icon = createStadiaControllerIcon();
    document.body.appendChild(icon);
  }

  function createSyncDesktopIcon() {
    const syncDesktopIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    syncDesktopIcon.setAttribute("class", "sync-desktop-icon");
    syncDesktopIcon.setAttribute("width", "63");
    syncDesktopIcon.setAttribute("height", "63");
    syncDesktopIcon.setAttribute("viewBox", "0 0 63 63");
    syncDesktopIcon.innerHTML = '<path d="M47.6437 28.5213C47.2701 26.6269 46.608 24.8804 45.6573 23.2818C44.7066 21.6832 43.3024 20.0325 41.4448 18.3297V25.4927H37.5073V11.3584H51.6416V15.2959H44.0088C46.3446 17.3622 48.1014 19.4773 49.2791 21.6412C50.4573 23.8051 51.238 26.0984 51.6213 28.5213H47.6437ZM37.6589 48.8651C36.7502 48.8651 35.9761 48.5455 35.3364 47.9063C34.6973 47.2667 34.3777 46.4925 34.3777 45.5838V37.5579C34.3777 36.6492 34.6973 35.875 35.3364 35.2354C35.9761 34.5962 36.7502 34.2766 37.6589 34.2766H53.1562C54.0649 34.2766 54.8389 34.5962 55.4781 35.2354C56.1177 35.875 56.4375 36.6492 56.4375 37.5579V45.5838C56.4375 46.4925 56.1177 47.2667 55.4781 47.9063C54.8389 48.5455 54.0649 48.8651 53.1562 48.8651H37.6589ZM11.3584 51.6416V47.7041H18.9912C16.3054 45.3753 14.3281 42.8715 13.0594 40.1927C11.7906 37.5139 11.1562 34.65 11.1562 31.6011C11.1562 27.0038 12.5134 22.915 15.2276 19.3345C17.9419 15.7535 21.3972 13.3304 25.5937 12.0652V16.2146C22.4976 17.409 19.9734 19.4062 18.0213 22.2062C16.0696 25.0062 15.0937 28.1378 15.0937 31.6011C15.0937 34.115 15.6102 36.4304 16.6432 38.5475C17.6765 40.6641 19.3139 42.7136 21.5552 44.6959V37.5073H25.4927V51.6416H11.3584ZM31.7527 56.4375V52.5H59.0625V56.4375H31.7527Z" fill="#E64646"/>';
    
    return syncDesktopIcon;
  }

  // メインコンテナにアイコンを追加する関数
  function positionSyncDesktopIcon() {
    const icon = createSyncDesktopIcon();
    document.body.appendChild(icon);
  }

  function createMemoryIcon() {
    const memoryIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    memoryIcon.setAttribute("class", "memory-icon");
    memoryIcon.setAttribute("width", "64");
    memoryIcon.setAttribute("height", "64");
    memoryIcon.setAttribute("viewBox", "0 0 64 64");
    memoryIcon.style.zIndex = "900";
    memoryIcon.innerHTML = '<path d="M25.3333 38.6662V25.3329H38.6667V38.6662H25.3333ZM24.6667 54.0509V49.3329H19.4873C18.1402 49.3329 17 48.8662 16.0667 47.9329C15.1333 46.9996 14.6667 45.8594 14.6667 44.5122V39.3329H9.94867V35.3329H14.6667V28.6662H9.94867V24.6662H14.6667V19.4869C14.6667 18.1398 15.1333 16.9996 16.0667 16.0662C17 15.1329 18.1402 14.6662 19.4873 14.6662H24.6667V9.94824H28.6667V14.6662H35.3333V9.94824H39.3333V14.6662H44.5127C45.8598 14.6662 47 15.1329 47.9333 16.0662C48.8667 16.9996 49.3333 18.1398 49.3333 19.4869V24.6662H54.0513V28.6662H49.3333V35.3329H54.0513V39.3329H49.3333V44.5122C49.3333 45.8594 48.8667 46.9996 47.9333 47.9329C47 48.8662 45.8598 49.3329 44.5127 49.3329H39.3333V54.0509H35.3333V49.3329H28.6667V54.0509H24.6667ZM44.5127 45.3329C44.718 45.3329 44.906 45.2474 45.0767 45.0762C45.2478 44.9056 45.3333 44.7176 45.3333 44.5122V19.4869C45.3333 19.2816 45.2478 19.0936 45.0767 18.9229C44.906 18.7518 44.718 18.6662 44.5127 18.6662H19.4873C19.282 18.6662 19.094 18.7518 18.9233 18.9229C18.7522 19.0936 18.6667 19.2816 18.6667 19.4869V44.5122C18.6667 44.7176 18.7522 44.9056 18.9233 45.0762C19.094 45.2474 19.282 45.3329 19.4873 45.3329H44.5127Z" fill="#E64646"/>';
    
    return memoryIcon;
  } 
  // メインコンテナにアイコンを追加する関数
  function positionMemoryIcon() {
    const icon = createMemoryIcon();
    document.body.appendChild(icon);
  }

  function positionDxText() {
    // 既存のDXテキストを削除（重複防止）
    const existingDxTexts = document.querySelectorAll('div');
    existingDxTexts.forEach(element => {
        if (element.textContent === 'DX') {
            element.remove();
        }
    });

    const dxText = document.createElement('div');
    dxText.textContent = 'DX';
    dxText.style.position = 'absolute';
    dxText.style.top = '331px';  // 1299px - 968px
    dxText.style.left = '371px';
    dxText.style.color = '#1F1F1F';
    dxText.style.fontFamily = '"Noto Sans JP"';
    dxText.style.fontSize = '40px';
    dxText.style.fontStyle = 'normal';
    dxText.style.fontWeight = '400';
    dxText.style.lineHeight = 'normal';
    dxText.style.zIndex = '950';
    
    const serviceContainer = document.querySelector('.service-container');
    if (serviceContainer) {
        serviceContainer.appendChild(dxText);
    }
  }

  function positionGameDevText() {
    const gameDevText = document.createElement('div');
    gameDevText.className = 'game-dev-text';
    gameDevText.innerHTML = 'ReAliceは主にappゲームの<br>開発に関わる技術力を<br>保有しています';
    document.body.appendChild(gameDevText);
  }

  function positionAutomationDescText() {
    const automationDescText = document.createElement('div');
    automationDescText.className = 'automation-description-text';
    automationDescText.innerHTML = '作業を自動化し<br>人員削減や最適化を<br>実現';
    document.body.appendChild(automationDescText);
  }

  function positionDxDescText() {
    const dxDescText = document.createElement('div');
    dxDescText.className = 'dx-description-text';
    dxDescText.innerHTML = 'AIの力を中心とした<br>企業のDXに寄与します';
    document.body.appendChild(dxDescText);
  }
  
  return (
    <div className="service-container">
      <div className="service-title">
        リアリスAI開発のサービスリスト
        <div className="service-title-rotated">What's is ReAlice?</div>
      </div>
      <div className="service-icon"></div>
      <div className="entertainment-text">エンタメ</div>
      <div className="automation-text">自動化</div>
      {/*<div className="dx-text">DX</div>*/}
      <img src="/image/CV.png" className="cv-image" alt="CV" />
      
      
    </div>
  );
};

export default Service; 