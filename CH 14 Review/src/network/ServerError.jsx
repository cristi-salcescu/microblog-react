import React from 'react';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Box from '@material-ui/core/Box';

import actions from './actions';
import { connect } from 'react-redux';

function ServerError({showError, serverError, HideServerError}) {
    return showError
     ? <Container maxWidth="xs">             
            <Box mb={1} mt={1}>
                <Alert 
                severity="error" 
                onClose={HideServerError}>
                    {serverError}
                </Alert>
            </Box>
        </Container>
    : (null);
}

export default connect(
    ({ network }) => ({
        serverError: network.serverError,
        showError: network.showError
    }),{
        ...actions
    }
  )(ServerError);