import NavigationCard from "@/components/cards/NavigationCard";
import { StyledContainer } from "./NavigationCards.styles";

function NavigationCards({ options }) {
  return (
    <StyledContainer>
      {options.map((item) => (
        <NavigationCard {...item} key={item.label} />
      ))}
    </StyledContainer>
  );
}

export default NavigationCards;
