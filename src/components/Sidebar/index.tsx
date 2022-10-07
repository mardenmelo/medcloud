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
    Icon
} from '@mui/material';
import StackedBarChartTwoToneIcon from '@mui/icons-material/StackedBarChartTwoTone';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import FormatListBulletedTwoToneIcon from '@mui/icons-material/FormatListBulletedTwoTone';
import { Box }from '@mui/system';
import { useNavigate, Navigate } from 'react-router-dom';

interface IAppThemeProviderProps {
    children: React.ReactNode;
}

// interface ItemProps {
//     to: 'string';
//     icon: 'string';
//     label: string;
//     onClick: () => void;
// }

// const ListItem: React.FC<ItemProps> = ({ to, icon, label, onClick }) => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         navigate(to)
//         onClick();
//     };

//     return (
//         <ListItemButton onClick={handleClick}>
//             <ListItemIcon>
//                 <Icon>{icon}</Icon>
//             </ListItemIcon>
//             <ListItemText primary={label}/>
//         </ListItemButton>
//     )
// }

export const Sidebar: React.FC<IAppThemeProviderProps> = ( { children }) => {
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
                </Box>
            </Drawer>
                <Box height="100vh" marginLeft={theme.spacing(32)}>
                    {children}
                </Box>
        </>
    )
}

