import { SearchBar } from "../../components/SearchBar"
import { LayoutDefault } from "../../shared/layout/LayoutDefault"

export const Dashboard = () => {
    return (
        <LayoutDefault 
            title="Dashboard"
            toolbar=
            {
                <SearchBar 
                    showSearchInput
                />
            }
        >
          
        </LayoutDefault>
    )
}