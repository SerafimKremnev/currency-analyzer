import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Converter from './Converter';

describe('Converter', () => {
  it('correctly converts currencies', () => {
    const variants = { RUB: { USD: 0.013 }, USD: { RUB: 75 } };
    render(<Converter variants={variants} />);

    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '100' } });

    expect(screen.getByText('1.3$')).toBeInTheDocument();
  });
});
