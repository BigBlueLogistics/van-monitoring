// @ts-nocheck
import { useMemo, useEffect, useState, startTransition, Fragment } from 'react';
import { useTable, usePagination, useGlobalFilter, useSortBy, useExpanded } from 'react-table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Icon from '@mui/material/Icon';
import Autocomplete from '@mui/material/Autocomplete';
import Skeleton from '@mui/material/Skeleton';
import MDBox from '@/components/atoms/MDBox';
import MDTypography from '@/components/atoms/MDTypography';
import MDInput from '@/components/atoms/MDInput';
import MDPagination from '@/components/atoms/MDPagination';

import DataTableHeadCell from '@/components/organisms/Tables/DataTable/DataTableHeadCell';
import DataTableBodyCell from '@/components/organisms/Tables/DataTable/DataTableBodyCell';
import { TDataTable } from './types';

function DataTable({
  entriesPerPage,
  canSearch,
  showTotalEntries,
  table,
  pagination,
  isSorted,
  noEndBorder,
  isLoading,
  renderRowSubComponent,
}: TDataTable) {
  const defaultValue =
    typeof entriesPerPage === 'object' && entriesPerPage.defaultValue
      ? entriesPerPage.defaultValue
      : 10;
  const entries =
    typeof entriesPerPage === 'object' && entriesPerPage.entries
      ? entriesPerPage.entries.map((el) => el.toString())
      : ['5', '10', '15', '20', '25'];

  const columns = useMemo(() => {
    return isLoading
      ? table.columns.map((column) => ({
          ...column,
          Cell: <Skeleton width="100%" height={15} />,
        }))
      : table.columns;
  }, [isLoading, table]);

  const data = useMemo(() => {
    return isLoading ? new Array(defaultValue).fill({}) : table.rows;
  }, [isLoading, table, defaultValue]);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    pageOptions,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;

  // Set the default value for the entries per page when component mounts
  useEffect(() => setPageSize(defaultValue || 10), [defaultValue]);

  // Set the entries per page value based on the select value
  const setEntriesPerPage = (value) => setPageSize(value);

  // Render the paginations
  const renderPagination = pageOptions.map((option) => (
    <MDPagination
      item
      key={option}
      onClick={() => gotoPage(Number(option))}
      active={pageIndex === option}
    >
      {option + 1}
    </MDPagination>
  ));

  // Handler for the input to set the pagination index
  const handleInputPagination = ({ target: { value } }) =>
    value > pageOptions.length || value < 0 ? gotoPage(0) : gotoPage(Number(value));

  // Customized page options starting from 1
  const customizedPageOptions = pageOptions.map((option) => option + 1);

  // Setting value for the pagination input
  const handleInputPaginationValue = ({ target: value }) => gotoPage(Number(value.value - 1));

  // Search input value state
  const [search, setSearch] = useState(globalFilter);

  // Search input state handle
  // Search input state handle
  const onSearchChange = (value) => {
    startTransition(() => {
      setGlobalFilter(value || undefined);
    });
  };

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    let sortedValue;

    if (isSorted && column.isSorted) {
      sortedValue = column.isSortedDesc ? 'desc' : 'asce';
    } else if (isSorted) {
      sortedValue = 'none';
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries starting point
  const entriesStart = pageIndex === 0 ? pageIndex + 1 : pageIndex * pageSize + 1;

  // Setting the entries ending point
  let entriesEnd;

  if (pageIndex === 0) {
    entriesEnd = pageSize;
  } else if (pageIndex === pageOptions.length - 1) {
    entriesEnd = rows.length;
  } else {
    entriesEnd = pageSize * (pageIndex + 1);
  }

  return (
    <TableContainer sx={{ boxShadow: 'none' }}>
      {entriesPerPage ? (
        <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
          {entriesPerPage && (
            <MDBox display="flex" alignItems="center">
              <Autocomplete
                disableClearable
                value={pageSize.toString()}
                options={entries}
                onChange={(event, newValue) => {
                  setEntriesPerPage(parseInt(newValue as unknown as string, 10));
                }}
                size="small"
                sx={{ width: '5rem' }}
                renderInput={(params) => <MDInput {...params} />}
              />
              <MDTypography variant="caption" color="secondary">
                &nbsp;&nbsp;entries per page
              </MDTypography>
            </MDBox>
          )}
          {canSearch && (
            <MDBox width="12rem" ml="auto">
              <MDInput
                placeholder="Search..."
                value={search}
                size="small"
                fullWidth
                onChange={({ currentTarget }) => {
                  setSearch(search);
                  onSearchChange(currentTarget.value);
                }}
              />
            </MDBox>
          )}
        </MDBox>
      ) : null}
      <Table {...getTableProps()}>
        <MDBox component="thead">
          {headerGroups.map((headerGroup) => (
            <TableRow key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <DataTableHeadCell
                  key={column.id}
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : 'auto'}
                  align={column.align ? column.align : 'left'}
                  sorted={setSortedValue(column)}
                >
                  {column.render('Header')}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </MDBox>
        <TableBody {...getTableBodyProps()}>
          {page.length ? (
            page.map((row, key) => {
              prepareRow(row);
              return (
                <Fragment key={row.id}>
                  <TableRow key={row.id} {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <DataTableBodyCell
                        key={cell.id}
                        isLoading={isLoading}
                        noBorder={noEndBorder && rows.length - 1 === key}
                        align={cell.column.align ? cell.column.align : 'left'}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </DataTableBodyCell>
                    ))}
                  </TableRow>
                  {row.isExpanded ? (
                    <TableRow className="subTable" sx={{ backgroundColor: '#dcdcdc' }}>
                      <DataTableBodyCell colSpan={row.cells.length || 0}>
                        {renderRowSubComponent({ row })}
                      </DataTableBodyCell>
                    </TableRow>
                  ) : null}
                </Fragment>
              );
            })
          ) : (
            <TableRow>
              <DataTableBodyCell align="center" colSpan={columns.length}>
                No data available.
              </DataTableBodyCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <MDBox
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        p={!showTotalEntries && pageOptions.length === 1 ? 0 : 3}
      >
        {showTotalEntries && (
          <MDBox mb={{ xs: 3, sm: 0 }}>
            <MDTypography variant="button" color="secondary" fontWeight="regular">
              Showing {entriesStart} to {entriesEnd} of {rows.length} entries
            </MDTypography>
          </MDBox>
        )}
        {pageOptions.length > 1 && (
          <MDPagination
            variant={pagination.variant ? pagination.variant : 'gradient'}
            color={pagination.color ? pagination.color : 'info'}
          >
            {canPreviousPage && (
              <MDPagination item onClick={() => previousPage()}>
                <Icon sx={{ fontWeight: 'bold' }}>chevron_left</Icon>
              </MDPagination>
            )}
            {renderPagination.length > 6 ? (
              <MDBox width="5rem" mx={1}>
                <MDInput
                  inputProps={{ type: 'number', min: 1, max: customizedPageOptions.length }}
                  value={customizedPageOptions[pageIndex]}
                  // @ts-ignore
                  onChange={(handleInputPagination, handleInputPaginationValue)}
                />
              </MDBox>
            ) : (
              renderPagination
            )}
            {canNextPage && (
              <MDPagination item onClick={() => nextPage()}>
                <Icon sx={{ fontWeight: 'bold' }}>chevron_right</Icon>
              </MDPagination>
            )}
          </MDPagination>
        )}
      </MDBox>
    </TableContainer>
  );
}

DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: 'gradient', color: 'info' },
  isSorted: true,
  noEndBorder: false,
};

export default DataTable;
