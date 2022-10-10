import { Button, Paper, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { useNavigate } from "react-router-dom";

interface ToolbarButtonProps {
    showButtonNew?: boolean;
    showButtonDelete?: boolean;
    showButtonSave?: boolean;
    onClickButtonNew?: () => void;
    onClickButtonDelete?: () => void;
    onClickButtonSave?: () => void;
    onLoadButtonNew?: boolean;
    onLoadButtonDelete?: boolean;
    onLoadButtonSave?: boolean;
    onLoadingButtons?: boolean;
}

export const Toolbar: React.FC<ToolbarButtonProps> = ({ 
    onClickButtonNew,
    onClickButtonDelete, 
    onClickButtonSave,  
    }) => {
    const theme = useTheme();

    const navigate = useNavigate();

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
            <Button 
                color='primary'
                disableElevation
                variant='contained'
                onClick={() => navigate('/addpatient/new')}
            >
                Novo
            </Button>

            <Button 
                color='info'
                disableElevation
                variant='outlined'
                onClick={onClickButtonSave}
            >
                Salvar
            </Button>
        </Box>
    )
}