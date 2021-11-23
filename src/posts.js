import * as React from "react";
import { List, Datagrid, TextField, DateField, EmailField } from 'react-admin';

function StoreList(props){
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="username" />
                {/* <TextField source="assigned" />
                <TextField source="categories" />
                <TextField source="schedules" />
                <TextField source="time_zone" />
                <TextField source="identifier" /> */}
            </Datagrid>
        </List>
    );
}

export default StoreList;