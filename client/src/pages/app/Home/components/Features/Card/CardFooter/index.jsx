import { StyledContainer } from './CardFooter.styles';
import TypeItem from './TypeItem';

function CardFooter({ typesInfo }) {
  return (
    <StyledContainer>
      {typesInfo.map((tpInfo) => (
        <TypeItem {...tpInfo} key={tpInfo.label} />
      ))}
    </StyledContainer>
  );
}

export default CardFooter;
