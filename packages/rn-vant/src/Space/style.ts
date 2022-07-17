import type { FlexAlignType, FlexStyle } from 'react-native';
import type { SpaceProps } from './type';

export const flexAlign: Record<Required<SpaceProps>['align'], FlexAlignType> = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
};

export const flexJustify: Record<Required<SpaceProps>['justify'], FlexStyle['justifyContent']> = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  evenly: 'space-evenly',
  start: 'flex-start',
  stretch: undefined,
};
