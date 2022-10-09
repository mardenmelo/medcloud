import { Typography } from "@mui/material"
import { SearchBar } from "../../components/SearchBar"
import { LayoutDefault } from "../../shared/layout/LayoutDefault"

export const Dashboard = () => {
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
          
        </LayoutDefault>
    )
}