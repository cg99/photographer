import React from 'react';
import '../../assets/sass/footer.scss';
import { RiFacebookBoxLine, RiInstagramLine, RiYoutubeLine } from "react-icons/ri";
import { CgArrowLongRight } from "react-icons/cg";


function Header() {

  React.useEffect(() => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');

    const body = document.body,
      html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight);

    setTimeout(window.addEventListener('scroll', () => {

      if (window.pageYOffset > Math.floor(height / 1.5)) {
        scrollToTopBtn.style.bottom = '70px';
      } else scrollToTopBtn.style.bottom = '-70px';
    }), 100)
  })

  const scrollToTop = () => {
    window.scroll({top: 0, behavior: 'smooth'})
  }

  return (
    <footer>
      <div className="footer">

        <div className="footer__company">
          <div>UGM Photography</div>
          <div>Rambazar-15, Pokhara</div>
          {/* <div>Gandaki, Nepal</div> */}
        </div>

        <div className="footer__contact">
          {/* <h6>Contact Us</h6> */}
          <div>+977 9806632775</div>
          <div>umessgm@gmail.com</div>
        </div>

        <div className="footer__social">
          <h6>Follow us on:</h6>
          <div className="social-link">
            <a href="https://facebook.com"><RiInstagramLine /></a>
            <a href="https://facebook.com"><RiYoutubeLine /></a>
            <a href="https://facebook.com"><RiFacebookBoxLine /></a>
          </div>
        </div>

      </div>

      <div className="footer__copyright">
        <span>
          Copyright © 2020 UGM Photography. All Rights Reserved.
        </span>
      </div>

      <div className="scroll-to-top" onClick={scrollToTop}>scroll to top&nbsp;<CgArrowLongRight /> </div>
    </footer>
  );
}

export default Header;
