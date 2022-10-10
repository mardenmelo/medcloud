import { 
    Button, 
    InputAdornment, 
    Paper, 
    TextField,
    useTheme,
    Link
 } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    searchText?: string;
    showSearchInput?: boolean;
    onChangeText?: (newText: string) => void; 
}

export const SearchBar: React.FC<SearchBarProps> = (
    { 
        searchText = '', 
        showSearchInput = false , 
        onChangeText
    }) => {

    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            height={theme.spacing(5)}
            component={Paper}
        >
            { showSearchInput && (
                <TextField 
                    id="input-with-icon-textfield"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    variant='outlined'
                    size="small"
                    placeholder="Pesquisar"
                    value={searchText}
                    onChange={(e) => onChangeText?.(e.target.value)}
                />
            )}
 
            <Box 
                flex={1} 
                display="flex" 
                justifyContent="end"
            >
                <Button 
                    color='primary'
                    disableElevation
                    variant='contained'
                    
                >
                    <Link 
                        href="/addpatient/new"
                        underline="none"
                        color="inherit"
                    >
                        Adicionar paciente
                    </Link>
                    
                </Button>

            </Box>
        </Box>
    )
}