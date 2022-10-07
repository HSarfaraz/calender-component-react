import React, { useState } from 'react';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DateRangePicker } from 'react-date-range';
import { addDays, subDays } from 'date-fns';

const DatePickerRageFilter = ({ onChange }) => {
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 7),
      endDate: addDays(new Date(), 1),
      key: 'selection',
    },
  ]);

  const handleOnChange = (range) => {
    const { selection } = range;
    onChange(selection);
    setState([selection]);
  };
  return (
    <div>
      <DateRangePicker
        onChange={handleOnChange}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction='horizontal'
      />
    </div>
  );
};

export default DatePickerRageFilter;
