import { useState } from 'react';
import { StyledContainer, StyledContentWrapper } from './Card.styles';
import CardHeader from './CardHeader';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';

function Card({ title, description, navigateTo, typesInfo, Icon }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <StyledContainer onClick={toggleExpanded}>
      <CardHeader
        title={title}
        navigateTo={navigateTo}
        isExpanded={isExpanded}
        Icon={Icon}
      />
      <StyledContentWrapper $isExpanded={isExpanded}>
        <CardDescription text={description} />
        <CardFooter typesInfo={typesInfo} />
      </StyledContentWrapper>
    </StyledContainer>
  );
}

export default Card;
