import {Box, IconButton, InputAdornment, TextField} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const SearchBar = () => {
    return (
        <Box className = 'searchbox'>
            <TextField label="Wyszukaj"
                       fullWidth
                        InputProps={{endAdornment: (<InputAdornment><IconButton><SearchOutlinedIcon/></IconButton></InputAdornment>),}}
            />
        </Box>
    )
}