import { render } from '@testing-library/react';

import Ticket from './ticket';

describe('Ticket', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ticket />);
    expect(baseElement).toBeTruthy();
  });
});
