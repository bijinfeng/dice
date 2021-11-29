import Accordion from './ListAccordion';
import AccordionGroup from './ListAccordionGroup';
import Icon from './ListIcon';
import Item from './ListItem';
import Section from './ListSection';
import Subheader from './ListSubheader';

interface ListProps {
  Accordion: typeof Accordion;
  AccordionGroup: typeof AccordionGroup;
  Icon: typeof Icon;
  Item: typeof Item;
  Section: typeof Section;
  Subheader: typeof Subheader;
}

const List: ListProps = { Accordion, AccordionGroup, Icon, Item, Section, Subheader };

export default List;
