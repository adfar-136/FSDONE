function WithLogger(WrappedComponent) {
    return function LoggedComponent(props){
        console.log('Component rendered:', WrappedComponent.name);
        return <WrappedComponent {...props} />;
    }
}

export default WithLogger;