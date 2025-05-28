import ExpandableCard from '@/components/cards/ExpandableCard';
import Header from './Header';
import Description from './Description';
import Footer from './Footer';

function Feature({ title, texts, navigateTo, tags, Icon }) {
  return (
    <ExpandableCard
      HiddenContent={
        <>
          <Description texts={texts} />
          <Footer tags={tags} />
        </>
      }
    >
      <Header title={title} navigateTo={navigateTo} Icon={Icon} />
    </ExpandableCard>
  );
}

export default Feature;
