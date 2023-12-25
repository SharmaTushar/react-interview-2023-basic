import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Counter from './Counter';

describe('UI', () => {

  it('starts with value 0', () => {
    render(<Counter/>);
    const counter = screen.getByTestId('counter');
    expect(counter).toHaveTextContent('0');
  });

  it('has a button to change counter value', () => {
    render(<Counter/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

});

describe('Interactions', () => {

  it('increments counter on clicking the button', async () => {
    const user = userEvent.setup()
    render(<Counter/>);
    const counter = screen.getByTestId('counter');
    const button = screen.getByRole('button');
    await user.click(button);
    expect(counter).toHaveTextContent('1');
  });

  it('resets value to 0 after clicking the button 4 times', async () => {
    const user = userEvent.setup()
    render(<Counter/>);
    const counter = screen.getByTestId('counter');
    const button = screen.getByRole('button');
    await user.click(button);
    await user.click(button);
    await user.click(button);
    expect(counter).toHaveTextContent('3');
    await user.click(button);
    expect(counter).toHaveTextContent('0');
  });

  it('sets value to 2 after clicking the button 10 times', async () => {
    const user = userEvent.setup()
    render(<Counter/>);
    const counter = screen.getByTestId('counter');
    const button = screen.getByRole('button');
    for (let i = 0; i < 10; i++) {
      await user.click(button);
    }
    expect(counter).toHaveTextContent('2');
  });

});
