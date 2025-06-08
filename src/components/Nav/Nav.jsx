import css from "./Nav.module.css";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useIsTablet from "../../hooks/useIsTablet";

export default function Nav({ isFooter = true, activeSection }) {
  const containerClass = isFooter ? css.container : css.footerContainer;
  const isTablet = useIsTablet();

  return (
    <div data-aos="fade-down" data-aos-delay="200" className={containerClass}>
      {isTablet ? (
        <MobileNav isFooter={isFooter}></MobileNav>
      ) : (
        <DesktopNav isFooter={isFooter} activeSection={activeSection} />
      )}
    </div>
  );
}
