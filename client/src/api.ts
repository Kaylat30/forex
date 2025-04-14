export const url: string = "https://retinoweb-server.vercel.app";
//export const url: string = "http://localhost:3000";

export async function LoginUser(email: string, password: string) {
    const requestBody = {
        email: email,
        password: password,
    };

    try {
        const res = await fetch(`${url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
            credentials: 'include'
        });

        const data = await res.json();
        

        if (!res.ok) {
            throw {
                message: data.error,
                statusText: res.statusText,
                status: res.status
            }
        }

        return data;

    } catch (error) {
      if (error instanceof Error) {
        console.error("Login error: " + error.message);
        throw error;
    }
        

    }
}

export async function registerUser(firstname: string, lastname: string, email: string, password: string) {
    const requestBody = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    };

    try {
        const res = await fetch(`${url}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
            credentials: 'include'
        });

        const data = await res.json();
        console.log(data)
        if (!res.ok) {
            throw {
                message: data.error,
                statusText: res.statusText,
                status: res.status
            }
        }

        return data;


    } catch (error) {
      if (error instanceof Error) {
        console.error("Signup error: " + error.message);
        throw error;
      }
    }
}

export async function logoutUser(): Promise<void> {
    try {
        const res = await fetch(`${url}/logout`, {
            method: 'POST',
            credentials: 'include'
        });
        if (res.ok) {
            console.log('logged out');
        }

        if (!res.ok) {
            throw {
                message: res.status,
                statusText: res.statusText,
                status: res.status
            }
        }
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
}
