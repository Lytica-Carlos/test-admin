// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser, fetchUtils, useDataProvider } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import jsonServerProvider from 'ra-data-json-server';
import drfProvider from 'ra-data-django-rest-framework';
import simpleRestProvider from 'ra-data-simple-rest';

import StoreList from './posts';
import CategoriesList from "./categories";
import StoreEdit from "./StoreEdit";
import authProvider from './authProvider';

const httpClient = (url, options = {}) => {
    console.log(url)
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const dataProvider = drfProvider('https://staging.vico.ai/analytics', httpClient);
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="stores?5" options={{ label: 'Tiendas' }} list={StoreList} edit={StoreEdit}/>
        <Resource name="roles" list={CategoriesList}/>
    </Admin>
    
);
  

export default App;
