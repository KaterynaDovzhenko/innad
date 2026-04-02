import facebook from "../../img/facebook-icon.svg";
import instagram from "../../img/insta-icon.svg";
import linkedin from "../../img/linkedin-icon.svg";
import whatsapp from "../../img/whatsapp-icon.svg";
import telegram from "../../img/telegram-icon.svg";
import css from "./SocialMediaList.module.css";

export default function SocialMediaList() {
  return (
    <ul className={css.list}>
      <li data-aos="fade-down" data-aos-delay="100">
        <div className={css.iconWrap}>
          <a
            href="https://www.facebook.com/profile.php?id=100005972346872"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
        </div>
      </li>
      <li data-aos="fade-down" data-aos-delay="150">
        <div className={css.iconWrap}>
          <a
            href="https://www.instagram.com/innapanovagm?igsh=MWtrdHFscWMzeHE5cA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </li>
      <li data-aos="fade-down" data-aos-delay="200">
        <div className={css.iconWrap}>
          <a
            href="https://www.linkedin.com/in/inna-dovzhenko-8a8432a0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </li>
      <li data-aos="fade-down" data-aos-delay="250">
        <div className={css.iconWrap}>
          <a
            href="https://wa.me/380672200730"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </li>
      <li data-aos="fade-down" data-aos-delay="300">
        <div className={css.iconWrap}>
          <a
            href="https://t.me/Inna_59"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="Telegram" />
          </a>
        </div>
      </li>
    </ul>
  );
}
