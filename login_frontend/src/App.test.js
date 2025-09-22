import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sign in call to action', () => {
  render(<App />);
  const cta = screen.getByRole('button', { name: /sign in/i });
  expect(cta).toBeInTheDocument();
});
