// useAxios hook

import { useState, useEffect } from 'react';
import axios from 'axios';


const useAxios = ({ url, method, body = null, headers = null }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const [requestedTime, setRequestedTime] = useState(0);

    const fetchData = () => {
        axios[method](url, JSON.parse(headers), JSON.parse(body))
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        setRequestedTime(Date.now())
        fetchData();
    }, [method, url, body, headers]);

    return { data, error, loading, requestedTime};
};

export default useAxios;
