import React from 'react';
import { StyledListItem, ToolsWrapper } from './ToolsContent.styled';
import { useTranslation } from 'react-i18next';
import { toolsData } from '../mockedData';

export default function ToolsContent(): React.ReactElement {
  const [t] = useTranslation();

  return (
    <ToolsWrapper>
      <h1 className={'title'}>{t('tools.title')}</h1>
      <div className={'sections'}>
        {toolsData.map(tool => {
          return (
            <div className={'block'} key={tool.id}>
              <p className={'section-title'}>{t(tool.title)}</p>
              <StyledListItem items={tool.tools} />
            </div>
          );
        })}
      </div>
    </ToolsWrapper>
  );
}
