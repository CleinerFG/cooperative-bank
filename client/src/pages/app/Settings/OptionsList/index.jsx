import Item from './Item';

function OptionsList({ items }) {
  return (
    <ul>
      {items.map(({ label, navigateTo, iconName }) => (
        <Item
          label={label}
          navigateTo={navigateTo}
          iconName={iconName}
          key={navigateTo}
        />
      ))}
    </ul>
  );
}

export default OptionsList;
