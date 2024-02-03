import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Pagination from "@/Components/Pagination";
import Footer from "@/Components/Footer";
export default function Projects({ auth, projects }) {
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 10; // Set the number of projects to display per page

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
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
        const totalPages = Math.ceil(projects.length / projectsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Projects
                </h2>
            }
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="container">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                      <th>S/N</th>
                                        <th>Project Name</th>
                                        <th>Department</th>
                                        <th>Submitted By</th>
                                        <th>Date</th>
                                        <th>Managed By</th>
                                        <th>Contract</th>
                                        <th>Cost</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentProjects.map((project, index) => (
                                        <tr key={project.id}>
                                            <td>{project.serial_number}</td>
                                            <td>{project.name}</td>
                                            <td>{project.department}</td>
                                            <td>{project.employee_name}</td>
                                            <td>{project.date}</td>
                                            <td>{project.project_manager}</td>
                                            <td>{project.contract_status == 0
                                                ? "N/A"
                                                : "Signed"}</td>
                                            <td>{project.total_cost}</td>
                                            <td>
                                                <a href="#" className="btn btn-primary btn-sm">View</a>
                                            </td>
                                        </tr>
                                    ))}
                                        
                                </tbody>
                            </table>
                        </div>
                        <Pagination
                            totalPages={Math.ceil(
                                projects.length / projectsPerPage
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
