import React, { useState, useMemo } from 'react'
import { useReactTable, getCoreRowModel, flexRender, createColumnHelper, getPaginationRowModel, getSortedRowModel, getFilteredRowModel } from '@tanstack/react-table';



function Table() {

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10
    })

    const [sorting, setSorting] = useState([])
    const [filtering, setFiltering] = useState('')

    const data = useMemo(() => {
        return [
            {
                id: 1,
                name: 'Ajay',
                email: 'ajay@example.com',
                age: 25,
                gender: 'Male',
                phone: '9876543210',
                country: 'India',
                status: 'Active',
                createdAt: '2023-10-01',
                role: 'Admin',
            },
            {
                id: 2,
                name: 'Sara Smith',
                email: 'sara@example.com',
                age: 30,
                gender: 'Female',
                phone: '9876543211',
                country: 'USA',
                status: 'Inactive',
                createdAt: '2023-11-15',
                role: 'Editor',
            },
            {
                id: 3,
                name: 'John Doe',
                email: 'john@example.com',
                age: 22,
                gender: 'Male',
                phone: '9876543212',
                country: 'UK',
                status: 'Active',
                createdAt: '2024-01-10',
                role: 'Viewer',
            },
            {
                id: 4,
                name: 'Emily Taylor',
                email: 'emily@example.com',
                age: 28,
                gender: 'Female',
                phone: '9876543213',
                country: 'Canada',
                status: 'Active',
                createdAt: '2024-03-05',
                role: 'Admin',
            },
            {
                id: 5,
                name: 'Michael Brown',
                email: 'michael@example.com',
                age: 35,
                gender: 'Male',
                phone: '9876543214',
                country: 'Australia',
                status: 'Pending',
                createdAt: '2024-04-20',
                role: 'Editor',
            },
            {
                id: 6,
                name: 'Linda Johnson',
                email: 'linda@example.com',
                age: 29,
                gender: 'Female',
                phone: '9876543215',
                country: 'Germany',
                status: 'Inactive',
                createdAt: '2024-05-12',
                role: 'Viewer',
            },
            {
                id: 7,
                name: 'David Lee',
                email: 'david@example.com',
                age: 31,
                gender: 'Male',
                phone: '9876543216',
                country: 'Singapore',
                status: 'Active',
                createdAt: '2024-06-18',
                role: 'Editor',
            },
            {
                id: 8,
                name: 'Sophia Martinez',
                email: 'sophia@example.com',
                age: 26,
                gender: 'Female',
                phone: '9876543217',
                country: 'Spain',
                status: 'Pending',
                createdAt: '2024-07-01',
                role: 'Admin',
            },
            {
                id: 9,
                name: 'Chris Wilson',
                email: 'chris@example.com',
                age: 33,
                gender: 'Male',
                phone: '9876543218',
                country: 'Brazil',
                status: 'Active',
                createdAt: '2024-07-15',
                role: 'Viewer',
            },
            {
                id: 10,
                name: 'Nina Patel',
                email: 'nina@example.com',
                age: 27,
                gender: 'Female',
                phone: '9876543219',
                country: 'India',
                status: 'Inactive',
                createdAt: '2024-08-05',
                role: 'Editor',
            },
            {
                id: 11,
                name: 'Ethan Clark',
                email: 'ethan@example.com',
                age: 24,
                gender: 'Male',
                phone: '9876543220',
                country: 'USA',
                status: 'Active',
                createdAt: '2024-08-10',
                role: 'Admin',
            },
            {
                id: 12,
                name: 'Olivia Davis',
                email: 'olivia@example.com',
                age: 32,
                gender: 'Female',
                phone: '9876543221',
                country: 'UK',
                status: 'Pending',
                createdAt: '2024-08-15',
                role: 'Editor',
            },
            {
                id: 13,
                name: 'Liam Rodriguez',
                email: 'liam@example.com',
                age: 29,
                gender: 'Male',
                phone: '9876543222',
                country: 'Canada',
                status: 'Active',
                createdAt: '2024-08-20',
                role: 'Viewer',
            },
            {
                id: 14,
                name: 'Emma Garcia',
                email: 'emma@example.com',
                age: 23,
                gender: 'Female',
                phone: '9876543223',
                country: 'Mexico',
                status: 'Inactive',
                createdAt: '2024-08-25',
                role: 'Admin',
            },
            {
                id: 15,
                name: 'Noah Miller',
                email: 'noah@example.com',
                age: 34,
                gender: 'Male',
                phone: '9876543224',
                country: 'Australia',
                status: 'Active',
                createdAt: '2024-09-01',
                role: 'Editor',
            },
            {
                id: 16,
                name: 'Ava Hernandez',
                email: 'ava@example.com',
                age: 28,
                gender: 'Female',
                phone: '9876543225',
                country: 'Germany',
                status: 'Active',
                createdAt: '2024-09-05',
                role: 'Viewer',
            },
            {
                id: 17,
                name: 'James Moore',
                email: 'james@example.com',
                age: 36,
                gender: 'Male',
                phone: '9876543226',
                country: 'Singapore',
                status: 'Pending',
                createdAt: '2024-09-10',
                role: 'Editor',
            },
            {
                id: 18,
                name: 'Isabella Taylor',
                email: 'isabella@example.com',
                age: 21,
                gender: 'Female',
                phone: '9876543227',
                country: 'Spain',
                status: 'Inactive',
                createdAt: '2024-09-15',
                role: 'Admin',
            },
            {
                id: 19,
                name: 'William Anderson',
                email: 'william@example.com',
                age: 30,
                gender: 'Male',
                phone: '9876543228',
                country: 'Brazil',
                status: 'Active',
                createdAt: '2024-09-20',
                role: 'Viewer',
            },
            {
                id: 20,
                name: 'Mia Thompson',
                email: 'mia@example.com',
                age: 26,
                gender: 'Female',
                phone: '9876543229',
                country: 'India',
                status: 'Active',
                createdAt: '2024-09-25',
                role: 'Editor',
            },
        ];
    }, [])

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('id', {
            header: 'ID',
            cell: info => info.getValue(),

        }),
        columnHelper.accessor('name', {
            header: 'Name',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('email', {
            header: 'Email',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        // cell merge example
        // columnHelper.display({
        //     id: 'nameAndEmail',
        //     header: 'Name & Email',
        //     cell: ({ row }) => {
        //         const name = row.original.name;
        //         const email = row.original.email;
        //         return (
        //             <div>
        //                 <div>{name}</div>
        //                 <div className="text-gray-500 text-sm">{email}</div>
        //             </div>
        //         );
        //     }
        // }),
        // also
        // {
        //     accessorFn:(row)=>`${row.name} ${row.email}`,
        //     header:'Demo'
        // },
        columnHelper.accessor('age', {
            header: 'Age',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        columnHelper.accessor('gender', {
            header: 'Gender',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        columnHelper.accessor('phone', {
            header: 'Phone',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        columnHelper.accessor('country', {
            header: 'Country',
            cell: info => info.getValue(),
            enableSorting: false,
            className: 'cursor-pointer'
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => (
                <span
                    className={
                        info.getValue() === 'Active'
                            ? 'text-green-600 font-medium'
                            : info.getValue() === 'Pending'
                                ? 'text-yellow-600 font-medium'
                                : 'text-red-600 font-medium'
                    }
                >
                    {info.getValue()}
                </span>
            ),
            enableSorting: false
        }),
        columnHelper.accessor('createdAt', {
            header: 'Created At',
            cell: info => new Date(info.getValue()).toLocaleDateString(),
        }),
        columnHelper.accessor('role', {
            header: 'Role',
            cell: info => info.getValue(),
            enableSorting: false
        }),
    ];

    const groupedColumns = [
        columnHelper.accessor('id', {
            header: 'ID',
            cell: info => info.getValue(),

        }),
        {
            header: "Details",
            columns: [
                columnHelper.accessor('name', { header: 'Name' }),
                columnHelper.accessor('email', { header: 'Email' })
            ]
        },
        columnHelper.accessor('age', {
            header: 'Age',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        columnHelper.accessor('gender', {
            header: 'Gender',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        columnHelper.accessor('phone', {
            header: 'Phone',
            cell: info => info.getValue(),
            enableSorting: false
        }),
        columnHelper.accessor('country', {
            header: 'Country',
            cell: info => info.getValue(),
            enableSorting: false,
            className: 'cursor-pointer'
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: info => (
                <span
                    className={
                        info.getValue() === 'Active'
                            ? 'text-green-600 font-medium'
                            : info.getValue() === 'Pending'
                                ? 'text-yellow-600 font-medium'
                                : 'text-red-600 font-medium'
                    }
                >
                    {info.getValue()}
                </span>
            ),
            enableSorting: false
        }),
        columnHelper.accessor('createdAt', {
            header: 'Created At',
            cell: info => new Date(info.getValue()).toLocaleDateString(),
        }),
        columnHelper.accessor('role', {
            header: 'Role',
            cell: info => info.getValue(),
            enableSorting: false
        }),
    ]

    const table = useReactTable({
        data,
        columns: groupedColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        state: { pagination, sorting, globalFilter: filtering },
        onPaginationChange: setPagination,
        pageCount: Math.ceil(data.length / pagination.pageSize),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setFiltering,

    });

    return (
        <>
            <div className='w-full flex justify-center items-center min-h-screen py-15'>
                <div className=' w-[90%] min-h-100 '>
                    <input type="text" placeholder='Search.. ' className='border border-dark mb-3 form-control px-2 text-sm w-70 h-8 rounded-xs border-gray-300 focus:border-gray-700 focus:outline-0'
                        value={filtering}
                        onChange={(e) => { setFiltering(e.target.value) }} />
                    <table className='w-full border-none font-normal'>
                        <thead>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            rowSpan={header.isPlaceholder ? 1 : header.subHeaders?.length ? 1 : 2}
                                            className={`px-4 py-3 text-sm font-semibold text-left 
            border border-gray-300 bg-gray-100 
            ${header.colSpan > 1 ? 'text-center' : ''}
          `} onClick={header.column.getToggleSortingHandler()}>
                                            {/* {flexRender(header.column.columnDef.header, header.getContext())}
                                            {{
                                                asc: <i class="fa-solid fa-sort-up"></i>,
                                                desc: <i class="fa-solid fa-sort-down"></i>
                                            }[header.column.getIsSorted()] ?? null} */}

                                            {/* grouped columns */}
                                            {
                                                header.isPlaceholder ?
                                                    null :
                                                    flexRender(header.column.columnDef.header, header.getContext())
                                            }
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50">
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id} className='p-4 text-left text-sm'>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='w-full flex justify-end'>
                        <div className='flex gap-2 items-center mt-3'>
                            <button className='border py-1 px-2 rounded-xs border-gray-400 text-gray-500 focus:border-gray-400 focus:text-gray-600 disabled:border-gray-200 disabled:text-gray-300 text-sm ' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>Prev</button>
                            <span className='text-gray-500 text-sm'>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</span>
                            <button className='border py-1 px-2 rounded-xs border-gray-400 text-gray-500 focus:border-gray-400 focus:text-gray-600 disabled:border-gray-200 disabled:text-gray-300 text-sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table