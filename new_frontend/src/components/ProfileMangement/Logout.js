import React from 'react';
import {getData} from '../../lib/fetch';

const Logout = () => {
    const logout = () => {
        getData('/user/logout')
        .then(resp => console.log(resp))
    }
    return (
        <button onClick={logout}>
            Logout!
        </button>
    )
}
export default Logout