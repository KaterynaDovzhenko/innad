import { useState } from "react";
import { useTranslation } from "react-i18next";
import PricingCard from "../../components/PricingCard/PricingCard";
import css from "./PricingPage.module.css";

export default function PricingPage() {
  const { t } = useTranslation();
  const classType = t("pricing", { returnObjects: true });
  const [selectedType, setSelectedType] = useState("individual");
  return (
    <section id="pricing" className={css.section}>
      <div className={css.container}>
        {Object.entries(classType).map(([key, data]) => {
          return (
            <PricingCard
              key={key}
              type={key}
              data={data}
              isSelected={selectedType === key}
              onSelect={setSelectedType}
            ></PricingCard>
          );
        })}
      </div>
    </section>
  );
}
