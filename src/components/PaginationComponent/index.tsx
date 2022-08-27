import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { IPagination } from '../../interfaces/components/IPagination';

const PaginationComponent: React.FC<IPagination> = ({ itemsCount, onChange }) => {

    return (
        <Stack spacing={2}>
            <Pagination onChange={onChange} count={itemsCount} color="primary" variant="outlined" shape="rounded" />
        </Stack>
    );
}

export default PaginationComponent