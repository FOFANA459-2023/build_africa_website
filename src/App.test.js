import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('renders the home hero', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Empowering Future Leaders in Africa');
});

test.each([
  ['/about', 'About Build Africa'],
  ['/programs', 'Our Programs'],
  ['/gallery', 'Annual Camp Photos'],
  ['/gallary', 'Annual Camp Photos'],
  ['/contact', 'Contact Us'],
  ['/donate', 'Donate to Build Africa'],
  ['/nope', "We couldn't find that page"],
])('renders %s', (path, heading) => {
  renderAt(path);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(heading);
});
