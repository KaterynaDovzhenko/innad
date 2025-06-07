import css from "./PricingCard.module.css";
import individualIcon from "../../img/individual-icon.svg";
import groupIcon from "../../img/group-icon.svg";
import checkMarkIcon from "../../img/check_mark-icon.svg";
import timeIcon from "../../img/time-icon.svg";
import growthIcon from "../../img/growth-icon.svg";
import ContactBtn from "../ContactBtn/ContactBtn";

export default function PricingCard({ type, data, isSelected, onSelect }) {
  const handleClick = () => {
    onSelect(type);
  };

  const iconCard = type === "individual" ? individualIcon : groupIcon;
  const iconAlt = type === "individual" ? "Individual plan" : "Group plan";

  return (
    <div
      className={`${css.card} ${isSelected ? css.selected : ""}`}
      onClick={handleClick}
    >
      <img src={iconCard} alt={iconAlt} className={css.iconCard} />
      <h3 className={css.title}>{data.title}</h3>
      <p className={css.description}>{data.description}</p>
      <ul className={css.list}>
        {data.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={css.priceContainer}>
        <div className={css.price}>
          <h3>{data.price}</h3>
          <p>{data.extra}</p>
        </div>
        <ul>
          {data.feature.map((item, index) => {
            const iconFeature = index === 0 ? timeIcon : growthIcon;
            return (
              <li key={index}>
                <img className={css.iconFeature} src={iconFeature} alt="icon" />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <ul className={css.detailsList}>
        {data.details.map((item, index) => (
          <li key={index}>
            <img src={checkMarkIcon} alt="Check mark" className={css.icon} />
            {item}
          </li>
        ))}
      </ul>
      <ContactBtn
        labelKey="book-this-class"
        fullWidth
        variant={!isSelected ? "default" : undefined}
      ></ContactBtn>
    </div>
  );
}
