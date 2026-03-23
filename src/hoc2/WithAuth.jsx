function WithAuth(WrappedComponent) {
    return function AuthComponent(props){
        const isLoggedIn = true;
        if(isLoggedIn){
            return <WrappedComponent {...props} />
        } else {
            return <h2>Please log in to access this component.</h2>
        }
    }
}
export default WithAuth;