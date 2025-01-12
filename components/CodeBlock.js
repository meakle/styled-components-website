import React from 'react';
import { Editor } from 'react-live';
import styled from 'styled-components';
import { darkGrey } from '../utils/colors';
import { monospace } from '../utils/fonts';
import rem from '../utils/rem';
import { Note } from './Note';

const CodeBlock = styled((props) => {
  const language = (props.language || 'clike').toLowerCase().trim();

  return <Editor {...props} disabled language={language} />;
})`
  background: ${darkGrey};
  border-radius: ${rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  font-family: ${monospace};
  font-size: 0.8rem;
  font-weight: 300;
  margin: ${rem(35)} 0;
  overflow-x: hidden;
  white-space: pre-wrap;

  ${Note} & {
    margin: ${rem(20)} 0;
  }
`;

export default CodeBlock;
