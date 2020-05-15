import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

// Components
import App from './App';
import SearchBar from './components/SearchBar'

test('renders app component', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Studio Ghibli/i);
  expect(header).toBeInTheDocument();
});

