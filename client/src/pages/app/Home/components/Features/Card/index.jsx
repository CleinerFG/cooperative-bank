import { StyledContainer } from './Card.styles';
import CardHeader from './CardHeader';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';

function Card({ title, description, navigateTo, typesInfo, Icon }) {
  return (
    <StyledContainer>
      <CardHeader title={title} navigateTo={navigateTo} Icon={Icon} />
      <CardDescription text={description} />
      <CardFooter typesInfo={typesInfo} />
    </StyledContainer>
  );
}

export default Card;
