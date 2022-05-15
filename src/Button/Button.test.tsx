import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories'

const { Default, Outlined } = composeStories(stories);

test('renders default button with default args', () => {
  render(<Default>Button</Default>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).not.toHaveStyle({ color: 'white' });
});

test('renders default button with overriden props', () => {
  render(<Default outlined>Button</Default>);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).not.toHaveStyle({ color: 'var(--color-blue-500)' });
});