import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';
import { H1, H2, H3, H4, H5, Paragraph, ParagraphBold, Label, MicroLabel, UltraMicroLabel } from '../typography';

const Wrapper = styled.div`
  margin: 20px;
`;

const Template: Story = (args) => (
  <Wrapper {...args}>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <Paragraph>Paragraph</Paragraph>
    <ParagraphBold>Paragraph Bold</ParagraphBold>
    <div>
      <Label>Label</Label>
    </div>
    <div>
      <MicroLabel>Micro Label</MicroLabel>
    </div>
    <div>
      <UltraMicroLabel>Ultra Micro Label</UltraMicroLabel>
    </div>
  </Wrapper>
);

export default {
  title: 'Styleguide/Typography',
  component: Wrapper,
};

export const Typography = Template.bind({});
