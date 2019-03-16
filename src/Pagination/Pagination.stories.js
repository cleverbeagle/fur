import React from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '.';

storiesOf('Pagination', module).add('Numbers Only', () => (
  <Pagination>
    <Pagination.Page>Prev</Pagination.Page>
    <Pagination.Page>1</Pagination.Page>
    <Pagination.Page>2</Pagination.Page>
    <Pagination.Page active>3</Pagination.Page>
    <Pagination.Page>4</Pagination.Page>
    <Pagination.Page>5</Pagination.Page>
    <Pagination.Page>Next</Pagination.Page>
  </Pagination>
));
