import { fireEvent, render } from '@testing-library/react';
import DatePickerRangeFilter from './Calender';

describe('test the date picker', () => {
  test('should render datepicker correctly', () => {
    const { asFragment } = render(<DatePickerRangeFilter />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test('checking the click event', () => {
  //   const actions = { onChange: jest.fn() };
  //   const { asFragment } = render(
  //     <DatePickerRangeFilter onChange={actions.onChange} />
  //   );

  //   const clikBtn = asFragment().find('button.rdrStaticRange');
  //   fireEvent.click(clikBtn);
  //   expect(actions.onChange).toHaveBeenCalled();
  // });
});
