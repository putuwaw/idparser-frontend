import { render, screen } from '@testing-library/react';
import App from './App';

test('renders check button', () => {
  render(<App />);
  const checkButton = screen.getByText("Selengkapnya");
  expect(checkButton).toBeTruthy();
});
