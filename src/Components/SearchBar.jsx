import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// function nazwaFunkcji(){
//     const response = await fetch('url')
//     const recipe = response.json();
//     console.log(recipe)
// }
export const SearchBar = () => {
    return (
        <Box className = 'searchbox'>
            <TextField label="Wyszukaj"
                        InputProps={{endAdornment: (<InputAdornment><IconButton><SearchOutlinedIcon/></IconButton></InputAdornment>),}}
            />
        </Box>
    )
}