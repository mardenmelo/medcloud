import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { SearchBar } from "../../components/SearchBar"
import { PatientListProps } from "../../dtos/PatientListProps"
import { useDebounce } from "../../hooks/useDebounce"
import { PatientService } from "../../services/api/axios/patientData/patientService"
import { LayoutDefault } from "../../shared/layout/LayoutDefault"

export const ListPatient = () => {
    const [searchParams, setsearchParams] = useSearchParams();
    const { debounce } = useDebounce();

    const [isLoading, setIsLoading] = useState(true);
    const [listPatient, setListPatient] = useState<PatientListProps>();
    const [totalPatient, setTotalPatient] = useState(0);

    const search = useMemo(() => {
        return searchParams.get('search') || '';
    }, [searchParams])

    useEffect(() => {
        setIsLoading(true)
        
        debounce(() => {
            PatientService.getAll(1, search).
            then((result) => {
                if(result instanceof Error) {
                    setIsLoading(false);
                    alert(result.message);
                } else {
                    console.log(result)
                    setTotalPatient(result.totalCount)
                    setListPatient(result.data)
                }
            })
        })
    }, [search ])

    return (
        <LayoutDefault 
            title="Lista de Pacientes"
            toolbar=    
            {
                <SearchBar  
                    showSearchInput
                    searchText={ search }
                    onChangeText={ text => setsearchParams({ search: text }, { replace: true }) }
                />
            }
        >
            </LayoutDefault>
    )
}