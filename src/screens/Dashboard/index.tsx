import { Card, CardContent, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { PatientService } from "../../services/api/axios/patientData/patientService"
import { LayoutDefault } from "../../shared/layout/LayoutDefault"

export const Dashboard = () => {

    const [isLoadingPatient, setIsLoadingPatient] = useState(true);
    const [totalCountPatient, setTotalCountPatient] = useState(0);
  
    useEffect(() => {
      setIsLoadingPatient(true);
  
      PatientService.getAll(1)
        .then((data) => {
          setIsLoadingPatient(false);
  
          if (data instanceof Error) {
            alert(data.message);
          } else {
            setTotalCountPatient(data.totalCount);
          }
        });
    }, []);

    return (
        <LayoutDefault 
            title="Dashboard"
            toolbar=
            {
                <Typography variant="overline" display="block" gutterBottom marginLeft={2} marginTop={3}>
                    Total de pacientes cadastrados
                </Typography>
            }
            
        >
          <Box width='100%' display='flex'>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3} marginLeft={2} width='40%' alignItems='center' justifyContent='center'>
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h5' align='center'>
                            Total de pacientes
                        </Typography>

                    <Box padding={6} display='flex' justifyContent='center' alignItems='center'>
                        {!isLoadingPatient && (
                            <Typography variant='h1'>
                                {totalCountPatient}
                            </Typography>
                        )}
                        {isLoadingPatient && (
                        <Typography variant='h6'>
                            Carregando...
                        </Typography>
                        )}
                    </Box>
                    </CardContent>
                </Card>

            </Grid>
          </Box>
        </LayoutDefault>
    )   
}