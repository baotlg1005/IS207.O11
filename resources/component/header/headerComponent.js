const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
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
  
  .btn-default {
    display: flex;
    width: 12.5rem;
    height: 3.25rem;
    padding: 1.33333rem 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 0.66667rem;
    border: 1px solid #fff;
  }
  .btn-default .text {
    font-size: 1.33333rem;
    font-weight: 500;
  }
  
  .btn-default:hover {
    opacity: 0.8;
  }
  
  .btn-default:active {
    opacity: 0.6;
  }
  
  .header-container {
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-top: 0.5rem;
    transition: 0.3s;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
  }
  .header-container .header__top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-container .header__top-content a {
    text-decoration: none;
  }
  .header-container .header__top-content a:visited {
    text-decoration: none;
  }
  .header-container .header__top-content .top-content__brand-container {
    display: flex;
  }
  .header-container .header__top-content .top-content__brand-container .brand-container__brand-logo {
    width: 8rem;
    background: rgba(165, 165, 165, 0);
    display: flex;
    flex-direction: column;
    gap: 0.83333rem;
  }
  .header-container .header__top-content .top-content__brand-container .brand-container__brand-logo img {
    width: 100%;
    height: auto;
  }
  .header-container .header__top-content .top-content__brand-container .brand-container__brand-name {
    width: 12.5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0.83333rem;
  }
  .header-container .header__top-content .top-content__brand-container .brand-container__brand-name .text {
    color: #000;
    font-size: 2.66667rem;
    font-style: italic;
    font-weight: 700;
  }
  .header-container .header__top-content .top-content__account-btn-group {
    display: flex;
    align-items: flex-start;
    gap: 1.66667rem;
  }
  .header-container .header__top-content .top-content__account-btn-group .account-btn-group__login-btn {
    border-radius: 0.66667rem;
    border: 1px solid #236eff;
    gap: 1rem;
  }
  .header-container .header__top-content .top-content__account-btn-group .account-btn-group__login-btn .text {
    color: rgba(35, 110, 255, 0.8);
    font-weight: 700;
  }
  .header-container .header__top-content .top-content__account-btn-group .account-btn-group__login-btn .login-btn__icon {
    font-size: 2rem;
    color: rgba(35, 110, 255, 0.8);
  }
  .header-container .header__top-content .top-content__account-btn-group .account-btn-group__sign-up-btn {
    border-radius: 0.66667rem;
    background: rgba(35, 110, 255, 0.8);
  }
  .header-container .header__top-content .top-content__account-btn-group .account-btn-group__sign-up-btn .text {
    color: #fff;
    font-weight: 700;
  }
  .header-container .header__navbar {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 0.5rem;
  }
  .header-container .header__navbar a {
    text-decoration: none;
  }
  .header-container .header__navbar a:visited {
    text-decoration: none;
  }
  .header-container .header__navbar .navbar__item {
    width: 14rem;
    height: 4.33333rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.33333rem 1.66667rem;
    border-radius: 0.66667rem;
    cursor: pointer;
  }
  .header-container .header__navbar .navbar__item .text {
    color: #687176;
    text-align: center;
    font-size: 1.33333rem;
    font-weight: 700;
  }
  .header-container .header__navbar .navbar__item:hover {
    background-color: #f2f3f3;
  }
  .header-container .header__navbar .navbar__item:active {
    background-color: #e4e6e6;
  }
  .header-space {
    height: 9rem;
    background-color: aqua;
  }
  @media only screen and (max-width: 900px) {
    .header-container .header__top-content .top-content__brand-container .brand-container__brand-name {
      display: none;
    }
    .header-container .header__top-content .top-content__account-btn-group .account-btn-group__sign-up-btn {
      display: none;
    }
  }
  /*# sourceMappingURL=header.css.map */
    </style>
    <div id="header" class="container-fluid header-container">
        <div class="container header__top-content">
            <a class="top-content__brand-container" href="../../pages/main">
                <div class="brand-container__brand-logo">
                    <img class="brand-logo" src="../../resources/images/logo.png">
                </div>
                <div class="brand-container__brand-name">
                    <p class="text">travelowkey</p>
                </div>
            </a>
            <div class="top-content__account-btn-group">
                <a class="btn-default account-btn-group__login-btn" href="../../pages/login">
                    <ion-icon class="login-btn__icon" name="person-outline"></ion-icon>
                    <div class="text">Đăng nhập</div>
                </a>
                <a class="btn-default account-btn-group__sign-up-btn" href="../../pages/signup">
                    <div class="text">Đăng ký</div>
                </a>
            </div>
        </div>
        <nav class="container header__navbar">
            <a class="navbar__item" href="../../pages/flight-search">
                <div class="text">
                    Vé máy bay
                </div>
            </a>
            <a class="navbar__item" href="../../pages/coach-search">
                <div class="text">
                    Vé xe khách
                </div>
            </a>
            <a class="navbar__item" href="../../pages/transfer-search">
                <div class="text">
                    Xe dịch vụ
                </div>
            </a>
            <a class="navbar__item" href="../../pages/hotel-search">
                <div class="text">
                    Khách sạn
                </div>
            </a>
        </nav>
    </div>
    <div class="header-space"></div>

`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
