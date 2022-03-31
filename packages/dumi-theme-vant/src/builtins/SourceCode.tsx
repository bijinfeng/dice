import React from 'react';
import Highlight from 'react-highlight';
import type { Language } from 'prism-react-renderer';

export interface ICodeBlockProps {
  code: string;
  lang: Language;
  showCopy?: boolean;
}

export default ({ code, lang }: ICodeBlockProps) => {
  return <Highlight language={lang}>{code}</Highlight>;
};
