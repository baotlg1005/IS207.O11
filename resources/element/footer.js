const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      padding-bottom: 5px;
      box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer class="container-fluid">
  <div class="container footer-container">
      <div class="footer__top-content">
          <div class="top-content__brand-container">
              <div class="brand-container__brand-logo">
                  <img src="/resources/images/logo.png" alt="" sizes="" srcset="">
              </div>
              <div class="brand-container__brand-name">
                  <p class="text">travelowkey</p>
              </div>
          </div>
          <div class="top-content__media-container">
              <a href="#">
                  <img src="/resources/images/svg/facebook-icon.svg" alt="" class="media-icon">
              </a>
              <a href="#">
                  <img src="/resources/images/svg/youtube-icon.svg" alt="" class="media-icon">
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
