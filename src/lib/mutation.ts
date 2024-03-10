
import axios from 'axios';



export async function register(data: RegisterType): Promise<any> {
    try {
        const response = await axios.post('/api/auth/register', data);

        return { response, success: true };

    } catch (error) {
        console.error('Registration failed:', error.response.data.message);
        throw new Error(error.message);
    }
}

export async function login(data: loginType): Promise<any> {
    try {
        const response = await axios.post('/api/login', data);
        console.log(response.data.message);
        return { response, success: true };

    } catch (error) {
        console.error('Login failed:', error?.response?.data?.message);
        // Handle error
        throw new Error(error.message);

    }
}
