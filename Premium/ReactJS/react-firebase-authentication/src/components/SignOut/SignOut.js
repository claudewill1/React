import React from 'react';

import {withFirebase} from '../Firebase';


const SignOutButton = ({firebase}) => (
    <buttn type="button" onClick={firebase.doSignOut}>
        Sign Out
    </buttn>
);


export default withFirebase(SignOutButton);