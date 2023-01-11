import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Vibhuti Gohil</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#" className="footer__link">About</a></li>
                    <li> <a href="#" className="footer__link">Projects</a></li>
                    <li><a href="#" className="footer__link">Contact</a></li>

                </ul>
                <div className="footer__social">
                    <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/" className="footer__social-link" target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &#169; VibhutiGohil. All right reserved.
                </span>
            </div>
        </section >
    )
};


export default Footer
