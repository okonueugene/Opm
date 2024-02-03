import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Pagination from "@/Components/Pagination";
import Footer from "@/Components/Footer";

export default function Requisitions({ auth, requistions }) {
    const [currentPage, setCurrentPage] = useState(1);
    const requistionsPerPage = 10; // Set the number of requistions to display per page

    const indexOfLastRequistion = currentPage * requistionsPerPage;
    const indexOfFirstRequistion = indexOfLastRequistion - requistionsPerPage;
    const currentRequistions = requistions.slice(
        indexOfFirstRequistion,
        indexOfLastRequistion
    );

    const changePage = (page) => {
        setCurrentPage(page);
    };

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        const totalPages = Math.ceil(requistions.length / requistionsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Requisitions
                </h2>
            }
        >
            <Head title="Requisitions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="container">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            <span class="table-header">
                                                S/N
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Project Name
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Department
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Submitted By
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Date
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Vendor
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Total Cost
                                            </span>
                                        </th>
                                        <th>
                                            <span class="table-header">
                                                Action
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRequistions.map(
                                        (requisition, index) => (
                                            <tr
                                                key={requisition.id}
                                                class="table-row"
                                            >
                                                <td data-label="S/N">
                                                    {requisition.serial_number}
                                                </td>
                                                <td data-label="Project Name">
                                                    {requisition.project_name}
                                                </td>
                                                <td data-label="Department">
                                                    {requisition.department}
                                                </td>
                                                <td data-label="Submitted By">
                                                    {requisition.submitted_by}
                                                </td>
                                                <td data-label="Date">
                                                    {requisition.date}
                                                </td>
                                                <td data-label="Vendor">
                                                    {requisition.vendor}
                                                </td>
                                                <td data-label="Total Cost">
                                                    {requisition.total_cost}
                                                </td>
                                                <td data-label="Action">
                                                    <a
                                                        href="#"
                                                        class="btn btn-primary btn-sm"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            totalPages={Math.ceil(
                                requistions.length / requistionsPerPage
                            )}
                            currentPage={currentPage}
                            onChangePage={changePage}
                            onPreviousPage={previousPage}
                            onNextPage={nextPage}
                        />
                    </div>
                </div>
            </div>
            <Footer />
            <style>{`
            body {
                font-family: 'lato', sans-serif;
              }
              .container {
                max-width: 1000px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 10px;
                padding-right: 10px;
              }
              
              h2 {
                font-size: 26px;
                margin: 20px 0;
                text-align: center;
                small {
                  font-size: 0.5em;
                }
              }
              
              .container {
                width: 100%;
                overflow-y: auto;
              }
.table{
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;

}
.table th,
.table td{
    padding: 1rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

.table thead th{

    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    color: #495057;
    background-color: #e9ecef;
    border-color: #dee2e6;
}
.table tbody + tbody{

    border-top: 2px solid #dee2e6;
}

.table .table{
    background-color: #fff;
}

.table-sm th,
.table-sm td{
    padding: 0.3rem;

}
.table-bordered{
    border: 1px solid #dee2e6;
}

.table-bordered th,
.table-bordered td{
    border: 1px solid #dee2e6;
}

.table-bordered thead th,
.table-bordered thead td{

    border-bottom-width: 2px;
}

.table-borderless th,
.table-borderless td,
.table-borderless thead th,
.table-borderless tbody + tbody{

    border: 0;
}

.table-striped tbody tr:nth-of-type(odd){
    background-color: rgba(0,0,0,0.05);
}

              `}</style>
        </AuthenticatedLayout>
    );
}
