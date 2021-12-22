import React, { FC } from 'react';
import { DocSearch, DocSearchProps } from '@docsearch/react';
import '@docsearch/css';

import './index.less';

export interface SearchInputProps {
  searchConfig?: DocSearchProps;
  lang?: string;
}

const SearchInput: FC<SearchInputProps> = props => {
  const { searchConfig } = props;

  const placeholder = searchConfig?.placeholder || 'Search...';

  return (
    <div className="van-doc-search">
      <DocSearch
        appId="R2IYF7ETH7"
        apiKey="599cec31baffa4868cae4e79f180729b"
        indexName="docsearch"
        placeholder={placeholder}
        {...searchConfig}
      />
    </div>
  );
};

export default SearchInput;
