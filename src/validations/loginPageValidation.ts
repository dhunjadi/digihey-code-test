import {ZodType, z} from 'zod';
import {LoginForm} from '../types';

export const loginPageValidationSchema: ZodType<LoginForm> = z.object({
    email: z.string().email(),
    password: z.string().min(6, 'Password is too short').regex(/\d/, {message: 'Password must contain at least one number'}),
});
