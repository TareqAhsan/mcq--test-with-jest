import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from '../pages/Home'


test('Home test renser', () => {
    render(<Home/>)
    const home = screen.getByTestId('home')
    expect(home).toBeInTheDocument()
})
