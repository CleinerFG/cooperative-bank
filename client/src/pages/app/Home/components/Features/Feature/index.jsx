import ExpandableCard from '@/components/cards/ExpandableCard';
import Header from './Header';
import Description from './Description';
import Footer from './Footer';

function Feature({ title, texts, navigateTo, tags, Icon }) {
  return (
    <ExpandableCard
      VisibleComponent={
        <Header title={title} navigateTo={navigateTo} Icon={Icon} />
      }
    >
      <Description texts={texts} />
      <Footer tags={tags} />
    </ExpandableCard>
  );
}

export default Feature;
