import css from "./Blur.module.css";
import useIsTablet from "../../hooks/useIsTablet";

export default function Blur({ className }) {
  const isTablet = useIsTablet();
  return (
    <>{!isTablet && <div className={`${css.blur} ${className || ""}`}></div>}</>
  );
}
