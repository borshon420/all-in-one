import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from "history";
import { Router } from 'react-router-dom';
import Details from '../components/Details';

test('renders details', () => {

    const history = createMemoryHistory();
  
    

    history.push("/details");
  
    render(
        <Router history={history}>
            <Details/>
        </Router>
    );
    const details = screen.getByTestId("details");
    expect(details).toBeInTheDocument();
  });