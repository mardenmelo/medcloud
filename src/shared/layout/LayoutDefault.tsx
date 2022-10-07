import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system"
import { ReactNode } from "react";

interface ILayoutProps {
    children: React.ReactNode;
    title: string;
    toolbar: ReactNode | undefined;
}

export const LayoutDefault: React.FC<ILayoutProps> = ({ children, title, toolbar }) => {
    const theme = useTheme();

    return (
        <Box 
            height='100%' 
            display='flex' 
            flexDirection='column' 
            gap={1}
        >
            <Box 
                padding={2} 
                display='flex' 
                height={theme.spacing(9)} 
                alignItems='center'
            >
                <Typography 
                    variant='h5'
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                >
                    {title}
                </Typography>
            </Box>
            {toolbar && (
                <Box>
                    {toolbar}
                </Box>
            )}
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    )
}