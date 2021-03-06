import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from '.';
import styled from 'styled-components';

// Assets
import UserIcon from '../../icons/User';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '250px'
}

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Placeholder',
  width: '250px'
}

export const WithError = Template.bind({});
WithError.args = {
  placeholder: 'Wrong input',
  width: '250px',
  error: true
}

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled',
  width: '250px',
  disabled: true,
}

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  placeholder: 'Not editable',
  width: '250px',
  readonly: true,
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Login',
  icon: UserIcon,
  width: '250px'
}

export const Clearable = () => {
  const [value, setValue] = useState('');

  return (
    <Input
      placeholder='Type and clear'
      width='250px'
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
      clearable
    />
  );
}

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  & > * {
    margin-right: 10px;
  }
`;

export const Sizes = () => {
  return (
    <>
      <Row>
        <Input placeholder='large' size='large' />
        <Input placeholder='default' size='default' />
        <Input placeholder='small' size='small' />
      </Row>
    </>
  );
};