import { Button, MenuItem, TextField } from '@mui/material';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface UserInfo {
    name: string;
    gender: string;
    lang: string;
    country: string;
}

const Home: React.FC = () => {

    const history = useHistory();

    const [user, setUser] = useState<UserInfo>({
        name: "",
        gender: "",
        lang: "",
        country: "",
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        history.push("/country", user);
        console.log(user)
    }
    return (
        <div data-testid="home">
        <h2>Weather Country Exam Pagenation Application</h2> 
        <form onSubmit={handleSubmit}>
        <div>
          <TextField
              value={user.country}
              name="country"
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Country Name"
              sx={{width: "25%", mb: 3}}
           />    
        </div>
        <div>
          <TextField
              value={user.name}
              name="name"
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Your Name"
              sx={{width: "25%", mb: 3}}
           />    
        </div> 
        <div>
            <TextField
              select
              label="Select Gender"
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
              sx={{width: "25%", mb: 3, textAlign: "left"}}
            >
                <MenuItem key="Male" value="Male">
                    Male
                </MenuItem>
                <MenuItem key="Female" value="Female">
                    Female
                </MenuItem>
            </TextField>
        </div>
        <div>
            <TextField
              select
              label="Select Language"
              name="lang"
              value={user.lang}
              onChange={handleInputChange}
              sx={{width: "25%", mb: 3, textAlign: "left"}}
            >
                <MenuItem key="Java" value="Java">
                    Java
                </MenuItem>
                <MenuItem key="NodeJS" value="NodeJS">
                    NodeJS
                </MenuItem>

            </TextField>
        </div>
        <Button variant="contained" sx={{width: "25%"}} size="large" type="submit">Submit</Button>
        </form>
      </div>
    );
};

export default Home;