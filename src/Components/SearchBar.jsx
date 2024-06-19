import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useState} from "react";

export const SearchBar = ({ setString }) => {
    const [searchText, setSearchText] = useState("");

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearch = () => {
        setString(searchText);
    };

    return (
        <Box className = 'searchbox'>
            <TextField label="Wyszukaj"
                       fullWidth
                       value={searchText}
                       onChange={handleChange}
                        InputProps={{endAdornment: (<InputAdornment><IconButton onClick={handleSearch}><SearchOutlinedIcon/></IconButton></InputAdornment>),}}
            />
        </Box>
    )
}