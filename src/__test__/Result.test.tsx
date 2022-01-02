import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from "history";
import { Router } from 'react-router-dom';
import Result from '../components/Result';
import {ResultProps} from '../components/Result';

test('renders result', () => {

    const history = createMemoryHistory();
  
    const res: ResultProps = {ansCount: 0, count: 0};

    history.push("/result", res);
  
    render(
        <Router history={history}>
            <Result/>
        </Router>
    );
    const result = screen.getByTestId("result");
    expect(result).toBeInTheDocument();
  });