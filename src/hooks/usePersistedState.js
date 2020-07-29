import React from 'react';

const usePersistedState = (startValue, name) => {
    let [value, setValue] = React.useState(startValue);
    React.useEffect(() => {
        localStorage.setItem(name, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
};

export default usePersistedState;