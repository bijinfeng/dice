import React from 'react';
import Highlight from 'react-highlight';
import { useCopy } from 'dumi/theme';
import clsx from 'clsx';
import type { Language } from 'prism-react-renderer';
import './SourceCode.less';

export interface ICodeBlockProps {
  code: string;
  lang: Language;
  showCopy?: boolean;
}

export default ({ code, lang, showCopy = true }: ICodeBlockProps) => {
  const [copyCode, copyStatus] = useCopy();

  return (
    <div
      className={clsx('van-doc-code-block', {
        'van-doc-code-block-copy-success': copyStatus === 'copied',
      })}
    >
      {showCopy && (
        <span
          className="van-doc-code-block-copy-btn"
          onClick={() => copyCode(code)}
          aria-hidden="true"
        />
      )}
      <Highlight language={lang}>{code}</Highlight>
    </div>
  );
};
