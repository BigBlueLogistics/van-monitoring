export default function initialData() {
  const commonHeadersAttr = {
    align: 'left',
    Cell: ({ value }: { [key: string]: any }) => value || '',
  };

  const tableHeaders = () => [
    {
      Header: 'Movement type',
      accessor: 'movement_type',
      ...commonHeadersAttr,
    },
    {
      Header: 'Name',
      accessor: 'name',
      ...commonHeadersAttr,
    },
    {
      Header: 'Dock No',
      accessor: 'dock_no',
      ...commonHeadersAttr,
    },
    {
      Header: 'Date time',
      accessor: 'date_time',
      ...commonHeadersAttr,
    },
  ];

  return {
    tableHeaders,
  };
}
