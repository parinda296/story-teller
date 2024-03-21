import React, { useEffect, useState } from 'react'
import { StoriesList, Story } from '../types';

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const storyData = await response.json();
                setData(storyData);
            } catch (error) {
                console.error('Error loading json data:', error);
            }
        };

        fetchData();
    }, []);

    return data as T;
}
