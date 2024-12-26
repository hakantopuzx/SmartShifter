import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Filter, Grid as GridIcon, Printer, Search, ArrowLeft, ArrowRight } from 'lucide-react';
import { materialRows } from '../data/materialData';
import InfoText from './InfoText';
import Pagination from '@mui/material/Pagination';

const columns: GridColDef[] = [
  { field: 'materialNr', headerName: 'Material Nr', width: 120 },
  { field: 'materialName', headerName: 'Material Name', width: 195 },
  { field: 'requiredQty', headerName: 'Required Qty', width: 140 },
  { field: 'totalQty', headerName: 'Total Qty', width: 140 },
  { field: 'materialNrRef', headerName: 'Material Nr', width: 140 },
  { field: 'erpOrderNumber', headerName: 'ERP Order Number', width: 145 },
  { field: 'orderStatus', headerName: 'Order Status', width: 195 },
  { field: 'suppliersAB', headerName: 'Suppliers AB', width: 145 },
];

const MaterialStatus: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [rows, setRows] = useState(materialRows);
  const [showSearch, setShowSearch] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filteredRows = materialRows.filter(row =>
      Object.values(row).some(val =>
        val?.toString().toLowerCase().includes(value.toLowerCase())
      )
    );
    setRows(filteredRows);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="max-w-[1280px] mx-auto py-6 sm:px-0 px-2">
      <div className="border border-gray-200 rounded-lg">
        <div className="">
          <div className="flex justify-between items-center p-4 sm:flex-row flex-col sm:gap-0 gap-3">
            <div className="bg-[#F8F9FA] rounded-t-lg">
              <div className="flex items-center gap-2 text-[#28A745]">
                <InfoText status='success' text='Purchase Orders Released' />
              </div>
            </div>
            <div className="flex gap-2 justify-end items-center">
              <div className="relative p-2 border border-gray-200 rounded-md flex items-center">
                <Search onClick={() => setShowSearch(!showSearch)} className="cursor-pointer" size={20} />
                {showSearch &&
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className={"ml-3 pl-3 pr-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3F51B5] focus:border-transparent w-full"}
                  />
                }
              </div>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 border border-gray-200 rounded-md ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <Filter size={20} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 border border-gray-200 rounded-md ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              >
                <GridIcon size={20} />
              </button>
              <button
                onClick={handlePrint}
                className="p-2 border border-gray-200 rounded-md hover:bg-gray-50"
              >
                <Printer size={20} />
              </button>
            </div>
          </div>

          <div>
            <DataGrid
              rows={paginatedRows}
              rowHeight={92}
              columns={columns}
              disableRowSelectionOnClick
              getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'white-row' : 'dark-row')}
              sx={{
                border: "none",
                '& .MuiDataGrid-root': {
                  border: 'none',
                },
                '& .MuiDataGrid-cell': {
                  borderColor: '#E5E7EB',
                  overflow: 'auto',
                  textOverflow: 'unset',
                  whiteSpace: 'normal !important',
                },
                '& .MuiDataGrid-columnHeaders': {
                  backgroundColor: '#F2F3FA',
                  borderBottom: '1px solid #E5E7EB',
                },
                '& .MuiDataGrid-footerContainer': {
                  display: "none"
                },
                '& .MuiPaginationItem-root': {
                  borderRadius: '8px',
                },
                '& .MuiPaginationItem-page.Mui-selected': {
                  backgroundColor: '#3F51B5',
                  color: 'white',
                },
                '& .white-row': {
                  backgroundColor: 'transparent',
                },
                '& .dark-row': {
                  backgroundColor: '#FAFAFD',
                }
              }}
            />
          </div>
          <div className="flex justify-between items-center p-4">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 text-sm text-[#6C7399]"
            >
              <ArrowLeft size={16} />
              Previous
            </button>
            <Pagination
              sx={{
                '& .MuiPaginationItem-root': { fontSize: '0.8rem', color: "#6C7399", border: "none", backgroundColor: 'white', borderRadius: '8px' },
                '& .MuiPaginationItem-page.Mui-selected': { color: '#6C7399', border: "1px solid #D2D6EA", backgroundColor: "white" },
              }}
              count={Math.ceil(rows.length / pageSize)}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
              color="primary"
              hideNextButton
              hidePrevButton
            />
            <button
              onClick={() => setPage((prev) => Math.min(prev + 1, Math.ceil(rows.length / pageSize)))}
              className="flex items-center gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 text-sm text-[#6C7399]"
            >
              Next
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialStatus;
