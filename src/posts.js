import * as React from "react";
import { List, Datagrid, TextField, DateField, EmailField, SearchInput, Filter } from 'react-admin';

const CustomerFilter = (props) => (<Filter {...props}>
    <SearchInput placeholder='Id' source='id' resettable alwasysOn />
</Filter>)

function StoreList(props){
    return (
        <List {...props} filters={<CustomerFilter />}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <TextField source="assigned" />
                <TextField source="categories" />
                <TextField source="schedules" />
                <TextField source="time_zone" />
                <TextField source="identifier" />
            </Datagrid>
        </List>
    );
}

export default StoreList;