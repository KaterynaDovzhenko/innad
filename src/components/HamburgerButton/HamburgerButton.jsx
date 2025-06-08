import css from "./HamburgerButton.module.css";

export default function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${css.hamburger} ${isOpen ? css.open : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
