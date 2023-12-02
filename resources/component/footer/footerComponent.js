const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter";
}

html {
  font-size: 12px;
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

footer {
  display: flex;
  padding: 1rem 0rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #4a4a4b;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.41667rem;
}
.footer-container .footer__top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.footer-container .footer__top-content .top-content__brand-container {
  display: flex;
  align-items: flex-start;
}
.footer-container .footer__top-content .top-content__brand-container .brand-container__brand-logo {
  display: flex;
  width: 13rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.83333rem;
  background: rgba(165, 165, 165, 0);
}
.footer-container .footer__top-content .top-content__brand-container .brand-container__brand-logo img {
  width: 100%;
  height: auto;
}
.footer-container .footer__top-content .top-content__brand-container .brand-container__brand-name {
  display: flex;
  width: 12.5rem;
  height: 5rem;
  padding: 0.83333rem;
  align-items: center;
  gap: 0.83333rem;
}
.footer-container .footer__top-content .top-content__brand-container .brand-container__brand-name .text {
  color: #fff;
  font-size: 2rem;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
}
.footer-container .footer__top-content .top-content__media-container {
  display: flex;
  gap: 1.25rem;
}
.footer-container .footer__information-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  color: white;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}/*# sourceMappingURL=footer.css.map */
  </style>
  <footer class="container-fluid">
  <div class="container footer-container">
      <div class="footer__top-content">
          <div class="top-content__brand-container">
              <div class="brand-container__brand-logo">
                  <img src="../../resources/images/logo.png" alt="" sizes="" srcset="">
              </div>
              <div class="brand-container__brand-name">
                  <p class="text">travelowkey</p>
              </div>
          </div>
          <div class="top-content__media-container">
              <a href="#">
                  <img src="../../resources/images/svg/facebook-icon.svg" alt="" class="media-icon">
              </a>
              <a href="#">
                  <img src="../../resources/images/svg/youtube-icon.svg" alt="" class="media-icon">
              </a>
          </div>
      </div>
      <svg class="container-fluid divine-line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152 2"
          fill="none">
          <path d="M0 1H1152" stroke="white" stroke-width="2" />
      </svg>
      <div class="footer__information-content">
          <div class="address-text">Công ty TNHH Travelowkey Việt Nam. Trường Đại học Công nghệ thông tin - ĐHQG
              TPHCM</div>
          <div class="copyright-text">© 2003 - 2023 Travelowkey Inc.</div>
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
