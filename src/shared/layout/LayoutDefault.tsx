import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system"

interface ILayoutProps {
    children: React.ReactNode;
    title: string;
    toolbar: string;
}

export const LayoutDefault: React.FC<ILayoutProps> = ({ children, title, toolbar }) => {
    const theme = useTheme();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box padding={2} display='flex' height={theme.spacing(9)} alignItems='center'>
                <Typography variant="h5">
                    {title}
                </Typography>
            </Box>
            <Box>
                {toolbar}
            </Box>
            <Box>
                {children}
            </Box>
        </Box>
    )
}