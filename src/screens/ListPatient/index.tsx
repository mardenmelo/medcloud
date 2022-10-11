import { Icon, IconButton, LinearProgress, Pagination, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from "@mui/material"
import { useEffect, useMemo, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { SearchBar } from "../../components/SearchBar"
import { PatientListProps } from "../../dtos/PatientListProps"
import { useDebounce } from "../../hooks/useDebounce"
import { PatientService } from "../../services/api/axios/patientData/patientService"
import { LayoutDefault } from "../../shared/layout/LayoutDefault"

export const ListPatient = () => {
    const [searchParams, setsearchParams] = useSearchParams();
    const { debounce } = useDebounce();

    const [isLoading, setIsLoading] = useState(true);
    const [listPatient, setListPatient] = useState<PatientListProps[]>([]);
    const [totalPatient, setTotalPatient] = useState(0);

    const navigate = useNavigate();

    const search = useMemo(() => {
        return searchParams.get('search') || '';
    }, [searchParams])

    const page = useMemo(() => {
        return Number(searchParams.get('page') || '1');
      }, [searchParams]);

      const handleDelete = (id: number) => {
          PatientService.deleteById(id)
            .then(result => {
              if (result instanceof Error) {
                alert(result.message);
              } else {
                setListPatient(listPatient.filter((patient) => patient.id !== id))
                alert('Registro apagado com sucesso!');
              }
            });
      };

    useEffect(() => {
        setIsLoading(true)
        
        debounce(() => {
            PatientService.getAll(page, search).
            then((result) => {
                if(result instanceof Error) {
                    alert(result.message);
                } else {
                    setIsLoading(false);
                    console.log(result)
                    setTotalPatient(result.totalCount)
                    setListPatient(result.data)
                }
            })
        })
    }, [page, search])

    return (
        <LayoutDefault 
            title="Lista de Pacientes"
            toolbar=    
            {
                <SearchBar  
                    showSearchInput
                    searchText={ search }
                    onChangeText={ text => setsearchParams({ search: text, page: '1' }, { replace: true }) }
                />
            }
        >
            <TableContainer>
                <Table>
                    <TableHead>
                        {
                            isLoading && (
                                <TableRow>
                                    <TableCell colSpan={11}>
                                        <LinearProgress variant="indeterminate" color="primary"/>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableHead>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id.</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Data Nasc.</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Rua</TableCell>
                            <TableCell>Número</TableCell>
                            <TableCell>Bairro</TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>UF</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            listPatient.map(patient => {
                                return (
                                    <TableRow key={patient.id}>
                                        <TableCell>{patient.id}</TableCell>
                                        <TableCell>{patient.name}</TableCell>
                                        <TableCell>{patient.birthDate}</TableCell>
                                        <TableCell>{patient.email}</TableCell>
                                        <TableCell>{patient.address.street}</TableCell>
                                        <TableCell>{patient.address.houseNumber}</TableCell>
                                        <TableCell>{patient.address.district}</TableCell>
                                        <TableCell>{patient.address.city}</TableCell>
                                        <TableCell>{patient.address.state}</TableCell>
                                        <TableCell>{patient.address.zipCode}</TableCell>                                       
                                        <TableCell>
                                            <IconButton onClick={() => handleDelete(patient.id)}> 
                                                <Icon color="error" sx={{ fontSize: 12 }}>delete</Icon>
                                            </IconButton>
                                            <IconButton onClick={() => navigate(`/addpatient/${patient.id}`)}>
                                                <Icon color="warning"sx={{ fontSize: 12 }}>edit</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>

                    {totalPatient == 0 && !isLoading &&(
                        <caption>Nenhum paciente encontrado.</caption>
                    )}

                    {(totalPatient > 0 && totalPatient > 6) && (
                        <TableRow>
                            <TableCell colSpan={11}>
                            <Pagination
                                page={page}
                                count={Math.ceil(totalPatient / 6)}
                                onChange={(_, newPage) => setsearchParams({ search, page: newPage.toString() }, { replace: true })}
                            />
                            </TableCell>
                        </TableRow>
                    )}                    


                </Table>
            </TableContainer>

        </LayoutDefault>
    )
}