/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import DialogModalTests from './DialogModalTests';

// Test Cases
import DefaultDialogModal from './DefaultDialogModal';

const routes = (
  <div>
    <Route path="/tests/dialog-modal" component={DialogModalTests} />
    <Route path="/tests/dialog-modal/default-dialog-modal" component={DefaultDialogModal} />
  </div>
);

export default routes;
