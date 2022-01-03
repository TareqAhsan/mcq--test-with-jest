import React from 'react'
import {createMemoryHistory} from 'history'
import { InitUser } from '../pages/Home'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import Exam from '../pages/Exam'
test('Exam test render', () => {
    const history = createMemoryHistory()
    const user:InitUser = {name:'tareq',gender:'Male',lang:'java'}
    history.push('/exam',user)
    render(
        <Router history = {history}>
            <Exam/>
        </Router>
    )
    const exam = screen.getByTestId('exam')
    expect(exam).toBeInTheDocument()
})
