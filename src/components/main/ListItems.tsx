import React from 'react';
import styled from 'styled-components';

const List = styled.ul({});

type TListItem = {
  caption: string;
  className?: string;
};

interface IListItemsProps {
  items: Array<TListItem | string>;
  className?: string;
}

export default function ListItems({
  items,
  className,
}: IListItemsProps): React.ReactElement {
  return (
    <List className={className}>
      {items.map((item, index) => {
        if (typeof item === 'string') {
          return <li>{item}</li>;
        } else {
          return (
            <li key={`${item.caption}-${index}`} className={item.className}>
              {item.caption}
            </li>
          );
        }
      })}
    </List>
  );
}
