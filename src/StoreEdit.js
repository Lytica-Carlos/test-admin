import * as React from "react";
import {Edit, SimpleForm, TextInput, DateTimeInput, SelectInput} from "react-admin";

const StoreEdit = (props) => (
    <Edit {...props} >
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput disabled source="name"/>
            <TextInput disabled source="identifier"/>
            <DateTimeInput disabled source="store_date" />
            <SelectInput source="status" choices={[
                { id: 'uno', name: "uno"},
                { id: 'dos', name: "dos"},
                { id: 'tres', name: "tres"},
                { id: 'cuatro', name: "cuatro"},
            ]} />


        </SimpleForm>
    </Edit>
);

export default StoreEdit;