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
    Icon,
} from '@mui/material';
import StackedBarChartTwoToneIcon from '@mui/icons-material/StackedBarChartTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import { Box }from '@mui/system';
import { useNavigate } from 'react-router-dom';

interface AppThemeProviderProps {
    children: React.ReactNode;
}


export const Sidebar: React.FC<AppThemeProviderProps> = ( { children }) => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleNavigateHome = () => {
        navigate('/home');
    } 

    const handleNavigateAdd = () => {
        navigate('/addpatient');
    }

    const handleNavigateList = () => {
        navigate('/listpatient');
    }
    
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
                    <Typography variant="caption" gutterBottom >
                        Desenvolvido com <FavoriteIcon sx={{ fontSize: 10 }}/> por
                    </Typography>
                    <Typography variant="caption" gutterBottom mt={-1.3}>
                        Marden Melo
                    </Typography>

                </Box>

                <Divider />

                <Box flex={1}>
                    <List component="nav">
                        <ListItemButton onClick={handleNavigateHome}>
                            <ListItemIcon>
                                <StackedBarChartTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleNavigateAdd}>
                            <ListItemIcon>
                                <PersonAddAltTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Adicionar paciente"/>
                        </ListItemButton>
                        <ListItemButton onClick={handleNavigateList}>
                            <ListItemIcon>
                                <FormatListBulletedTwoToneIcon />
                            </ListItemIcon>
                            <ListItemText primary="Listar pacientes"/>
                        </ListItemButton>
                    </List>
                </Box>
                <List component="nav">
                    <ListItemButton onClick={handleNavigateHome} >
                        <ListItemIcon>
                            <ArrowBackSharpIcon color='error'/>
                        </ListItemIcon>
                        <ListItemText 
                            primary="Sair"
                           
                        />
                    </ListItemButton>                   
                </List>
                </Box>
            </Drawer>
                <Box height="100vh" marginLeft={theme.spacing(32)}>
                    {children}
                </Box>
        </>
    )
}

