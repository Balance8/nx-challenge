import { render } from '@testing-library/react';

import EditTicket from './edit-ticket';

describe('EditTicket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditTicket />);
    expect(baseElement).toBeTruthy();
  });
});
