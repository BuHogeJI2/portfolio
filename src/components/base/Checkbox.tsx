import React from 'react';
import styled from 'styled-components';

const CheckboxLabel = styled.label<{ checked?: boolean }>(
  ({ theme }) => theme.label,
  ({ checked }) => ({
    textDecoration: checked ? 'underline' : 'unset',
    textUnderlineOffset: '4px',
  })
);

const CheckboxInput = styled.input.attrs({
  type: 'checkbox' as string,
})(({ theme }) => theme.checkbox);

export interface ICheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  content?: React.ReactNode;
  onChange?: (value: string, e?: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | undefined;
  className?: string;
}

export default function Checkbox(props: ICheckboxProps): React.ReactElement {
  const { content, name, value, onChange, ...rest } = props;

  return (
    <>
      <CheckboxLabel checked={rest.checked}>
        <CheckboxInput
          value={value}
          name={name || value?.toString()}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange?.(e.target.value, e)
          }
          {...rest}
        />
        {content}
      </CheckboxLabel>
    </>
  );
}
