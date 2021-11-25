const authProvider = {
    login:({email, password}) => {
        console.log(email)
        const request = new Request('https://staging.vico.ai/rest-auth/', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                console.log(response)
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            });
    },
    checkAuth: (...params) => {
        return Promise.resolve();
    },
    getPermissions: () => {
        return Promise.resolve();
    }
};

export default authProvider;