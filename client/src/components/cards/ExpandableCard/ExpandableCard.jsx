import { useState } from 'react';
import { ExpandedCardContext } from './context';
import { StyledContainer, StyledContentWrapper } from './ExpandableCard.styles';

function ExpandableCard({ VisibleComponent, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <ExpandedCardContext.Provider value={{ isExpanded }}>
      <StyledContainer onClick={toggleExpanded}>
        {VisibleComponent}
        <StyledContentWrapper $isExpanded={isExpanded}>
          {children}
        </StyledContentWrapper>
      </StyledContainer>
    </ExpandedCardContext.Provider>
  );
}

export default ExpandableCard;
