import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Pagination from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import Modal from "@/Components/Modal";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Requisitions({ auth, requistions }) {
    //modal
    const [showRequisitionModal, setShowRequisitionModal] = useState(false);

    const [selectedRequisition, setSelectedRequisition] = useState(null);

    // Function to open the modal and set the selected requisition
    const openRequisitionModal = (requisition) => {
        if (requisition) {
            setSelectedRequisition(requisition);
            setShowRequisitionModal(true);
        }
    };

    const closeRequisitionModal = () => {
        setShowRequisitionModal(false);
    };

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
                        <div className="container">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            <span className="table-header">
                                                S/N
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
                                                Project Name
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
                                                Department
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
                                                Submitted By
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
                                                Date
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
                                                Vendor
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
                                                Total Cost
                                            </span>
                                        </th>
                                        <th>
                                            <span className="table-header">
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
                                                className="table-row"
                                            >
                                                <td data-label="S/N">
                                                    {requisition.serial_number}
                                                </td>
                                                <td data-label="Project Name">
                                                    {requisition.project.name}
                                                </td>
                                                <td data-label="Department">
                                                    {requisition.department}
                                                </td>
                                                <td data-label="Submitted By">
                                                    {requisition.employee.name}
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
                                                        className="btn btn-primary btn-sm"
                                                        onClick={() =>
                                                            openRequisitionModal(
                                                                requisition
                                                            )
                                                        }
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
                <Modal
                    title="Requisition"
                    show={showRequisitionModal}
                    close={closeRequisitionModal}
                >
                    {selectedRequisition && (
                        <div className="card">
                            <div className="requisition requisition-print">
                                <div className="requisition-wrap">
                                    <div className="requisition-brand text-center">
                                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                                    </div>
                                    <div className="requisition-head">
                                        <div className="requisition-contact">
                                            <span className="overline-title">
                                                Requisitioner Info
                                            </span>
                                            <div className="requisition-contact-info mt-2">
                                                <ul className="list-plain ">
                                                    <li className="requisition-contact-name">
                                                        <span>Name</span>:
                                                        <span>
                                                            {
                                                                selectedRequisition?.requisitioner
                                                            }
                                                        </span>
                                                    </li>
                                                    <li className="requisition-department">
                                                        <span>Department</span>:
                                                        <span className>
                                                            {
                                                                selectedRequisition?.department
                                                            }
                                                        </span>
                                                    </li>
                                                    <li className="requisition-project">
                                                        <span>Project</span>:
                                                        <span>
                                                            {
                                                                selectedRequisition
                                                                    ?.project
                                                                    .name
                                                            }
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="requisition-desc">
                                            <h3 className="title">
                                                Vendor Information
                                            </h3>
                                            <ul className="list-plain mt-2">
                                                <li className="requisition-id">
                                                    <span>Name</span>:
                                                    <span>
                                                        {
                                                            selectedRequisition?.vendor
                                                        }
                                                    </span>
                                                </li>
                                                <li className="requisition-date">
                                                    <span>Date</span>:
                                                    <span>
                                                        {
                                                            selectedRequisition?.date
                                                        }
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="requisition-bills w-100">
                                        <div className="table-responsive w-100">
                                            <table className="table table-bordered w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Item</th>
                                                        <th>Price</th>
                                                        <th>Qty</th>
                                                        <th>Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedRequisition?.items.map(
                                                        (item, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    {
                                                                        item.description
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item.unit_price
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        item.total_price
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="3">
                                                            <span className="overline-title">
                                                                Total
                                                            </span>
                                                        </td>
                                                        <td>$435.00</td>
                                                    </tr>

                                                    <tr>
                                                        <td colspan="3">
                                                            <span className="overline-title">
                                                                Tax (16%)
                                                            </span>
                                                        </td>
                                                        <td>$43.50</td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="3">
                                                            <span className="overline-title">
                                                                Grand Total
                                                            </span>
                                                        </td>
                                                        <td>$478.00</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <button
                                                className="btn btn-warning btn-sm float-end"
                                                onClick={closeRequisitionModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal>
            </div>
            <Footer />
            <style>{`
            body {
                font-family: 'lato', sans-serif;
              }
              .container {
                width: 100%;
                overflow-y: auto;
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

  .table-hover tbody tr:hover{
    color: #212529;
     background-color: rgba(0,0,0,0.075);
   } 

  .table-primary,
  .table-primary > th,
  .table-primary > td{
    background-color: #b8daff;
    }


  .card {
    background-color: #fff;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0,0,0,0.1);
    margin-bottom: 1rem;
    border: 1px solid #dee2e6;
   }

  .requisition {
    padding: 20px;
    background-color: #fff;

   }
   .requisition-head {
    display: flex;
    flex-direction: row; /* Already set, but confirming */
    align-items: stretch; /* Optionally add for consistent height */
    justify-content: space-between; /* Already set, but confirming */
    margin: 20px 0;
    gap: 12px; /* Add for spacing */
   } 

   .requisition-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    }
  .title{
    font-weight: bold; 
   }
  .overline-title
  {
    font-weight: bold;
   }
  .requisition-bills {
    margin-top: 20px;
   }
   .requisition-date {
    margin-top: 30px;
    font-weight: bold;

  }

              `}</style>
        </AuthenticatedLayout>
    );
}
