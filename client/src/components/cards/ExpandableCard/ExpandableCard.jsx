import { useState } from 'react';
import { ExpandedCardContext } from './context';
import { StyledContainer, StyledHiddenContent } from './ExpandableCard.styles';

function ExpandableCard({ HiddenContent, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <ExpandedCardContext.Provider value={{ isExpanded }}>
      <StyledContainer onClick={toggleExpanded}>
        {children}
        <StyledHiddenContent $isExpanded={isExpanded}>
          {HiddenContent}
        </StyledHiddenContent>
      </StyledContainer>
    </ExpandedCardContext.Provider>
  );
}

export default ExpandableCard;
