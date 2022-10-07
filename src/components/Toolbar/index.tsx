import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

export const Toolbar: React.FC = () => {
    return (
        <Box>
            <TextField />
            <Button>
                Novo
            </Button>
        </Box>
    )
}