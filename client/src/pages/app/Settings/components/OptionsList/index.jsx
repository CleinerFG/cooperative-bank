import Item from './Item';

function OptionsList({ items }) {
  return (
    <ul>
      {items.map(({ label, navigateTo, Icon }) => (
        <Item
          label={label}
          navigateTo={navigateTo}
          Icon={Icon}
          key={navigateTo}
        />
      ))}
    </ul>
  );
}

export default OptionsList;
