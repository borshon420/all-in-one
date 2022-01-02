import { render, screen } from '@testing-library/react';
import CountryInfo from '../components/CountryInfo';
import {UserInfo} from '../components/Home'

import {createMemoryHistory} from "history";
import { Router } from 'react-router-dom';

test('renders country', () => {

    const history = createMemoryHistory();
  
    const user: UserInfo = {name: "Borshon", gender: "Male", lang: "Java", country: "bangladesh"};

    history.push("/exam", user);
  
    render(
        <Router history={history}>
            <CountryInfo/>
        </Router>
    );
    const country = screen.getByTestId("country");
    expect(country).toBeInTheDocument();
  });