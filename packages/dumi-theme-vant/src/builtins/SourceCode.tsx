import React from 'react';

import type { Language } from 'prism-react-renderer';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './SourceCode.less';

/**
 * define DSL which can be highlighted as similar language
 */
const SIMILAR_DSL = {
  acss: 'css',
  axml: 'xml',
};

export interface ICodeBlockProps {
  code: string;
  lang: Language;
  showCopy?: boolean;
}

export default ({ code, lang }: ICodeBlockProps) => {
  return (
    <Highlight {...defaultProps} code={code} language={SIMILAR_DSL[lang] || lang} theme={undefined}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i, className: 'code' })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key, className: 'code' })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
