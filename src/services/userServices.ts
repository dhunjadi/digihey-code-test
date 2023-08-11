/* eslint-disable no-console */
import axios from 'axios';
import {BASE_URL} from '../constants';
import {LoginForm} from '../types';

export const login = async ({email, password}: LoginForm) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {email, password});

        console.log(response.data);
    } catch (err) {
        console.log(err);
    }
};
