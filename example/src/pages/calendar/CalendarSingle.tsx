import React, { useState } from 'react';
import { Cell, Calendar } from '@pingtou/rn-vant';

const CalendarSingle = () => {
  const [visible, setVisible] = useState(false);

  const handleConfirm = (date: Date | Date[]) => {
    console.log(date);
    setVisible(false);
  };

  return (
    <>
      <Cell title="选择单个日期" isLink onPress={() => setVisible(true)} />
      <Calendar visible={visible} onConfirm={handleConfirm} onClose={() => setVisible(false)} />
    </>
  );
};

export default CalendarSingle;
