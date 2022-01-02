import { render, screen } from '@testing-library/react';
import {UserInfo} from '../components/Home'

import {createMemoryHistory} from "history";
import { Router } from 'react-router-dom';
import Exam from '../components/Exam';

test('renders exam', () => {

    const history = createMemoryHistory();
  
    const user: UserInfo = {name: "Borshon", gender: "Male", lang: "Java", country: "bangladesh"};

    history.push("/exam", user);
  
    render(
        <Router history={history}>
            <Exam/>
        </Router>
    );
    const exam = screen.getByTestId("exam");
    expect(exam).toBeInTheDocument();
  });