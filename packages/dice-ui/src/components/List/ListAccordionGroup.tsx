import * as React from 'react';

type Props = {
  /**
   * Function to execute on selection change.
   */
  onAccordionPress?: (expandedId: string | number) => void;
  /**
   * Id of the currently expanded list accordion
   */
  expandedId?: string | number;
  /**
   * React elements containing list accordions
   */
  children: React.ReactNode;
};

export type ListAccordionGroupContextType = {
  expandedId: string | number | undefined;
  onAccordionPress: (expandedId: string | number) => void;
} | null;

export const ListAccordionGroupContext = React.createContext<ListAccordionGroupContextType>(null);

const ListAccordionGroup = ({ expandedId: expandedIdProp, onAccordionPress, children }: Props) => {
  const [expandedId, setExpandedId] = React.useState<string | number | undefined>(undefined);

  const onAccordionPressDefault = (newExpandedId: string | number) => {
    setExpandedId(currentExpandedId =>
      currentExpandedId === newExpandedId ? undefined : newExpandedId
    );
  };

  return (
    <ListAccordionGroupContext.Provider
      value={{
        expandedId: expandedIdProp || expandedId, // component can be controlled or uncontrolled
        onAccordionPress: onAccordionPress || onAccordionPressDefault,
      }}
    >
      {children}
    </ListAccordionGroupContext.Provider>
  );
};

ListAccordionGroup.displayName = 'List.AccordionGroup';

export default ListAccordionGroup;
