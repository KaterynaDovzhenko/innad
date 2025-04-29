import facebook from "../../img/facebook-icon.svg";
import instagram from "../../img/insta-icon.svg";
import linkedin from "../../img/linkedin-icon.svg";
import whatsapp from "../../img/whatsapp-icon.svg";
import telegram from "../../img/telegram-icon.svg";
import css from "./SocialMediaList.module.css";

export default function SocialMediaList() {
  return (
    <ul className={css.list}>
      <li>
        <a
          href="https://www.facebook.com/profile.php?id=100005972346872"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/innapanovagm?igsh=MWtrdHFscWMzeHE5cA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/inna-dovzhenko-8a8432a0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/380672200730"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsapp} alt="WhatsApp" />
        </a>
      </li>
      <li>
        <a
          href="https://t.me/Inna_59"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegram} alt="Telegram" />
        </a>
      </li>
    </ul>
  );
}
