/* eslint-disable no-console */
import axios from 'axios';
import {BASE_URL} from '../constants';
import {LoginForm} from '../types';

const getToken = () => {
    return localStorage.getItem('token');
};

export const login = async ({email, password}: LoginForm) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {email, password});
        return response;
    } catch (err) {
        console.log(err);
    }
};

export const encode = async (inputString: string): Promise<{encodedString: string}> => {
    const headers = {
        Authorization: `${getToken()}`,
    };

    return await axios
        .post(`${BASE_URL}/encode`, {inputString}, {headers})
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};
