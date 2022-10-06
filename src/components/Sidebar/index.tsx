import { 
    Drawer, 
    useTheme, 
    Avatar,
    Divider, 
    Typography, 
    List, 
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
} from '@mui/material';
import StackedBarChartTwoToneIcon from '@mui/icons-material/StackedBarChartTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import { Box }from '@mui/system';

interface IAppThemeProviderProps {
    children: React.ReactNode;
}

export const Sidebar: React.FC<IAppThemeProviderProps> = ( { children }) => {

    const theme = useTheme();

    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(32)} height="100%" display='flex' flexDirection='column'>
                <Box 
                    width='100%' 
                    height={theme.spacing(20)} 
                    display='flex' 
                    alignItems='center' 
                    justifyContent='center'
                    flexDirection='column'
                >
                    <Avatar
                        alt="medcloud"
                        src="https://medcloud.link/logos/open-graph-logo.png"
                        sx={{ width: 56, height: 56 }}
                        variant="rounded"
                    />
                     <Typography variant="h6" gutterBottom>
                        MedCloud
                    </Typography>
                    <Typography variant="caption" gutterBottom >
                        #PacientePrimeiro
                    </Typography>
                </Box>

                <Divider />

                <Box flex={1}>
                    <List component="nav">
                        <ListItemButton>
                            <ListItemIcon>
                                <StackedBarChartTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonAddAltTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Adicionar paciente"/>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <FormatListBulletedTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Listar pacientes"/>
                        </ListItemButton>
                    </List>
                </Box>
                </Box>
            </Drawer>
                <Box height="100vh" marginLeft={theme.spacing(32)}>
                    {children}
                </Box>
        </>
    )
}

