import ChangeLangBtn from "../ChangeLangBtn/ChangeLangBtn";
import css from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Lessons</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Reviews</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
      <ChangeLangBtn></ChangeLangBtn>
    </div>
  );
}
