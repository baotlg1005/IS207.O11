const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
  footer {
    background: #202c34;
  }
  footer a {
    text-decoration: none;
  }
  footer ion-icon {
    font-size: 2rem !important;
    color: #a3a8ab;
  }
  footer .footer__top-container {
    gap: 10rem;
  }
  footer .footer__top-container .brand-container {
    gap: 1rem;
  }
  footer .footer__top-container .brand-container img {
    width: 100%;
    height: auto;
  }
  footer .footer__top-container .brand-container .text {
    color: #fff;
    font-size: 3rem !important;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
  }
  footer .footer__top-container .title .text {
    color: #fff;
    font-size: 1.5rem !important;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  footer .footer__top-container .content .text {
    color: #a3a8ab;
    font-size: 1.5rem !important;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  footer .footer__top-container .content:hover ion-icon {
    color: #fff;
  }
  footer .footer__top-container .content:hover .text {
    color: #fff;
  }
  footer .footer__bottom-container .text {
    color: #fff;
    font-size: 1.5rem !important;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
  .display-flex {
    display: flex !important;
  }
  
  .flex-row {
    flex-direction: row;
  }
  
  .flex-column {
    flex-direction: column;
  }
  
  .align-center {
    align-items: center;
  }
  
  .p-2 {
    padding: 2rem;
  }
  
  .w-25 {
    width: 25%;
  }
  
  .w-75 {
    width: 75%;
  }
  
  .w-50 {
    width: 50%;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .justify-center {
    justify-content: center;
  }
  
  .gap-1 {
    gap: 1rem;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter";
  }
  
  html {
    font-size: 10.5px;
  }
  
  body {
    position: relative;
  }
  
  .container-fluid {
    width: 100%;
  }
  
  .container {
    width: 80%;
    padding: auto;
    margin: auto;
  }
  
  .show {
    display: flex !important;
  }
  
  .hide {
    display: none !important;
  }
  
  .blur-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 100;
  }/*# sourceMappingURL=footer.css.map */
  </style>
  <footer class="container-fluid">
  <div class="container display-flex flex-column">
      <div class="footer__top-container display-flex flex-row p-2">
          <div class="w-25 display-flex flex-column gap-1">
              <div class="brand-container display-flex flex-row align-center">
                  <div class="logo">
                      <img src="../../resources/images/logo.png">
                  </div>
                  <div class="text">travelowkey</div>
              </div>
              <div class="img-container display-flex flex-row align-center justify-between">
                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                      class="w-25">
                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75"
                      class="w-25">
                  <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75"
                      class="w-25">
              </div>
          </div>
          <div class="w-75 display-flex flex-row justify-between">
              <div class="display-flex flex-column gap-1">
                  <div class="title">
                      <div class="text">Theo dõi chúng tôi trên</div>
                  </div>
                  <a class="content display-flex flex-row align-center gap-1" href="https://www.facebook.com/TravelokaVN">
                      <ion-icon name="logo-facebook"></ion-icon>
                      <div class="text">Facebook</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="https://www.instagram.com/traveloka.vn/">
                      <ion-icon name="logo-instagram"></ion-icon>
                      <div class="text">Instagram</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="https://www.youtube.com/@travelokavn">
                      <ion-icon name="logo-youtube"></ion-icon>
                      <div class="text">Youtube</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="https://www.tiktok.com/@traveloka.vn">
                      <ion-icon name="logo-tiktok"></ion-icon>
                      <div class="text">Tiktok</div>
                  </a>
              </div>
              <div class="display-flex flex-column gap-1">
                  <div class="title">
                      <div class="text">Sản phẩm</div>
                  </div>
                  <a class="content display-flex flex-row align-center gap-1" href="../flight-search/">
                      <ion-icon name="airplane-outline"></ion-icon>
                      <div class="text">Vé máy bay</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="../coach-search/">
                      <ion-icon name="bus-outline"></ion-icon>
                      <div class="text">Vé xe khách</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="../transfer-search/">
                      <ion-icon name="car-outline"></ion-icon>
                      <div class="text">Xe dịch vụ</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="../hotel-search/">
                      <ion-icon name="business-outline"></ion-icon>
                      <div class="text">Khách sạn</div>
                  </a>
              </div>
              <div class="display-flex flex-column gap-1">
                  <div class="title">
                      <div class="text">Khác</div>
                  </div>
                  <a class="content display-flex flex-row align-center gap-1" href="../piracy-notice/">
                      <div class="text">Chính sách quyền riêng tư</div>
                  </a>
                  <a class="content display-flex flex-row align-center gap-1" href="../terms-and-condition/">
                      <div class="text">Điều khoản & Điều kiện</div>
                  </a>
              </div>
          </div>
      </div>
  </div>
  <svg class="container-fluid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152 2" fill="none">
      <path d="M0 1H1152" stroke="white" stroke-width="1" />
  </svg>
  <div class="container display-flex flex-column">
      <div class="footer__bottom-container display-flex flex-column align-center p-2">
          <div class="text">Công ty TNHH Travelowkey Việt Nam. Trường Đại học Công nghệ thông tin - ĐHQG
              TPHCM</div>
          <div class="text">Copyright © 2003 - 2023 Travelowkey Inc.</div>
      </div>
  </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: "closed" });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
