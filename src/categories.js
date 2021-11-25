import * as React from "react";
import { List, Datagrid, TextField, DateField, EmailField, SearchInput, Filter } from 'react-admin';

const CustomerFilter = (props) => (<Filter {...props}>
    <SearchInput placeholder='Name busqueda' source='name' resettable alwasysOn />
</Filter>)

function CategoriesList(props){
    return (
        <List {...props} filters={<CustomerFilter />}>
            <Datagrid>
                <TextField source="name" />
            </Datagrid>
        </List>
    );
}

export default CategoriesList;