import { render, screen } from '@testing-library/react';
import Pagenation from '../components/Pagenation';

test('renders pagenatin test', () => {
  render(<Pagenation />);
  const page = screen.getByTestId("page");
  expect(page).toBeInTheDocument();
});