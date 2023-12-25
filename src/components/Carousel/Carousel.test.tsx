import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Carousel from './Carousel';

const images = ['first', 'second', 'third', 'fourth', 'last'];

const imagesAlt = ['alt01', 'alt02', 'alt03'];

describe('UI', () => {

  it('displays an image', () => {
    render(<Carousel images={images}/>);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  it('has a button to change image', () => {
    render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

});

describe('Behavior', () => {

  it('displays first image by default', () => {
    render(<Carousel images={images}/>);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', images[0]);
  });

  it('displays first image of updated images prop', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Carousel images={images}/>);
    const image = screen.getByRole('img');
    const button = screen.getByRole('button');
    await user.click(button);
    await user.click(button);
    await user.click(button);
    expect(image).toHaveAttribute('src', images[3]);
    rerender(<Carousel images={imagesAlt}/>);
    expect(image).toHaveAttribute('src', imagesAlt[0]);
  });

});

describe('Interactions', () => {

  it('changes image on button click', async () => {
    const user = userEvent.setup()
    render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    await user.click(button);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', images[1]);
  });

  it(`displays last image after button has been clicked ${images.length-1} times`, async () => {
    const user = userEvent.setup()
    render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    for (let i = 0; i < images.length - 1; i++) {
      await user.click(button);
    }
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', images[images.length - 1]);
  });

  it(`displays first image after button has been clicked ${images.length} times`, async () => {
    const user = userEvent.setup()
    render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    for (let i = 0; i < images.length; i++) {
      await user.click(button);
    }
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', images[0]);
  });

  it('changes image from updated images prop on button click', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    const image = screen.getByRole('img');
    await user.click(button);
    rerender(<Carousel images={imagesAlt}/>);
    await user.click(button);
    expect(image).toHaveAttribute('src', imagesAlt[1]);
  });

  it(`displays last image from images prop when button has been clicked ${imagesAlt.length - 1} times`, async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    const image = screen.getByRole('img');
    rerender(<Carousel images={imagesAlt}/>);
    for (let i = 0; i < imagesAlt.length - 1; i++) {
      await user.click(button);
    }
    expect(image).toHaveAttribute('src', imagesAlt[imagesAlt.length - 1]);
  });

  it(`displays first image from images prop when button has been clicked ${imagesAlt.length} times`, async () => {
    const user = userEvent.setup()
    const { rerender } = render(<Carousel images={images}/>);
    const button = screen.getByRole('button');
    const image = screen.getByRole('img');
    rerender(<Carousel images={imagesAlt}/>);
    for (let i = 0; i < imagesAlt.length; i++) {
      await user.click(button);
    }
    expect(image).toHaveAttribute('src', imagesAlt[0]);
  });

});
