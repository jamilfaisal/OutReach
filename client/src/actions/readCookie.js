// check if a user is logged in on the session cookie
export const readCookie = (app) => {
    const url = "/user/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                // set the global user state
                this.props.handleLogin(json.currentUser);
            }
        })
        .catch(error => {
            console.log(error);
        });
};
