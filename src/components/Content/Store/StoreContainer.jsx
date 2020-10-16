import React from 'react';
import Store from './Store';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
    }
}

const StoreContainer = connect(mapStateToProps)(Store);

export default StoreContainer;