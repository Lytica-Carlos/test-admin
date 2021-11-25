import * as React from 'react';
import { useState, useEffect } from 'react';
import { withDataProvider, useDataProvider, Loading, Error } from 'react-admin';

const storeDta = ({ storeId }) => {
    const dataProvider = useDataProvider();
    const [store, setStore] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        dataProvider.getOne('stores', { id: storeId })
            .then(({ data }) => {
                setStore(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            })
    }, []);

    if (loading) return <Loading />;
    if (error) return <Error />;
    if (!user) return null;

    return (
        <ul>
            <li>Name: {store.name}</li>
            <li>Id: {store.id}</li>
        </ul>
    )
};

export default storeDta;
