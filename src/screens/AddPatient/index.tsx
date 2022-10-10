import { Grid, LinearProgress, Paper, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { FormHandles } from "@unform/core"
import { Form } from "@unform/web"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { UnformTextField } from "../../components/Form/TextField"
import { Toolbar } from "../../components/Toolbar"
import { PatientListProps } from "../../dtos/PatientListProps"
import { PatientService } from "../../services/api/axios/patientData/patientService"
import { LayoutDefault } from "../../shared/layout/LayoutDefault"

type ParamsProps = {
    id: string
}

export const AddPatient = () => {
    const { id = 'new' } = useParams<ParamsProps>();
    const [ isLoading, setIsLoading ] = useState(false);
    const formRef = useRef<FormHandles>(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(id !== 'new') {
            setIsLoading(false);

            PatientService.getById(Number(id))
            .then((dataPatient) => {
                setIsLoading(false);
                if(dataPatient instanceof Error) {
                    alert(dataPatient.message)
                    navigate('/listpatient')
                } else {
                    formRef.current?.setData(dataPatient)
                }
            })
        }
    },[id])

    const handleSaveNewPatient = (dataPatient: Omit<PatientListProps, 'id'>) => {


        if(id == 'new') {
            PatientService
            .create(dataPatient)
            .then((data) => {
                if(data instanceof Error) {
                    alert(data.message);
                } else {
                    alert('Dados salvos!')
                    navigate(`/addpatient/${data}`)
                }
            })
        } else {
            PatientService
            .updateById(Number(id), {id: Number(id), ...dataPatient})
            .then((data) => {
                if(data instanceof Error) {
                    alert(data.message);
                } 
            })
        }
    }


    return (
        <LayoutDefault 
            title="Adicionar Paciente"
            toolbar=
            {
                <Toolbar 
                    onClickButtonSave={() => formRef.current?.submitForm()}
                />
            }
        >
            {
                isLoading && (
                    <LinearProgress variant="indeterminate" color="primary"/>
                )
            }

            <Form ref={formRef} onSubmit={handleSaveNewPatient}>
                <Box
                    m={1} 
                    display='flex' 
                    flexDirection='column' 
                    component={Paper} 
                    variant='outlined'
                >
                    <Grid container spacing={2} direction="column" padding={2}>
                        <Grid item>
                            <Typography variant="h6">
                                Cadastro de Paciente
                            </Typography>
                        </Grid>
                        <Grid container item direction='row' spacing={2}>
                            <Grid item xs={12}>
                                <UnformTextField label="Nome Completo" name="name" fullWidth/>
                            </Grid>
                        </Grid>
                        <Grid container item direction='row' spacing={2}>
                             <Grid item xs={9}>
                                <UnformTextField label="E-mail" name="email" type='email' fullWidth/>
                            </Grid>
                            <Grid item xs={3}>
                                <UnformTextField label="Data de Nascimento" name="birthDate" fullWidth/>
                            </Grid>
                        </Grid>
                        <Grid container item direction='row' spacing={2}>
                             <Grid item xs={9}>
                                <UnformTextField label="Rua" name="address.street" fullWidth/>
                            </Grid>
                            <Grid item xs={3}>
                                <UnformTextField label="Número" name="address.houseNumber" fullWidth/>
                            </Grid>
                        </Grid>
                        <Grid container item direction='row' spacing={2}>
                             <Grid item xs={6}>
                                <UnformTextField label="Bairro" name="address.district" fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <UnformTextField label="Cidade" name="address.city" fullWidth/>
                            </Grid>
                        </Grid>
                        <Grid container item direction='row' spacing={2}>
                             <Grid item xs={6}>
                                <UnformTextField label="UF" name="address.state" fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <UnformTextField label="CEP" name="address.zipCode" fullWidth/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Form>
   
        </LayoutDefault>
    )
}