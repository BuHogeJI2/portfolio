import React from 'react';
import styled from 'styled-components';
import { useLightModeContext } from '../../../components';
import { footer } from '../mockedData';

const SocialLinksWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

export default function SocialLinks(): React.ReactElement {
  const { mode } = useLightModeContext();

  return (
    <SocialLinksWrapper>
      {footer.socialLinks(mode).map(item => (
        <SocialItem {...item} />
      ))}
    </SocialLinksWrapper>
  );
}

const SocialItemWrapper = styled.div({
  cursor: 'pointer',
  '&:not(:last-child)': {
    marginRight: '20px',
  },
  '.icon': {
    margin: '0 auto',
    width: '30px',
    height: '30px',
  },
});

interface ISocialItemProps {
  name: string;
  icon: string;
  link: string;
}

function SocialItem({
  name,
  icon,
  link,
}: ISocialItemProps): React.ReactElement {
  return (
    <SocialItemWrapper>
      <a href={link} target="__blank">
        <img className={'icon'} src={icon} />
      </a>
    </SocialItemWrapper>
  );
}
