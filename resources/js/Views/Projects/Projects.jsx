import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Pagination from "@/Components/Pagination";
import Footer from "@/Components/Footer";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Modal from "@/Components/Modal";

export default function Projects({ auth, projects }) {
    //modal
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Function to open the modal and set the selected project
    const openProjectModal = (project) => {
        setSelectedProject(project);
        setShowProjectModal(true);
    };

    // Function to close the modal
    const closeProjectModal = () => {
        setSelectedProject(null);
        setShowProjectModal(false);
    };

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
                                        <th>Date Due</th>
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
                                            <td>{project.due_date}</td>
                                            <td>{project.project_manager}</td>
                                            <td>
                                                {project.contract_status == 0
                                                    ? "N/A"
                                                    : "Signed"}
                                            </td>
                                            <td>{project.total_cost}</td>
                                            <td>
                                                <a
                                                    href="#"
                                                    className="btn btn-primary btn-sm"
                                                    onClick={() =>
                                                        openProjectModal(
                                                            project
                                                        )
                                                    }
                                                >
                                                    View
                                                </a>
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
                <Modal
                    title="Project Details"
                    show={showProjectModal}
                    onClose={closeProjectModal}
                >
                    <div className="p-6 max-h-screen overflow-y-auto">
                        <div class="card-inner">
                            <div
                                class="card-title
                            "
                            >
                                <span>Project Details</span>
                            </div>
                            <div class="card-body">
                                <div
                                    class="form-group
                                "
                                >
                                    <label for="name">Name</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="name"
                                        value={selectedProject?.name}
                                        disabled
                                    />
                                </div>
                                <div
                                    class="form-group
                                "
                                >
                                    <label for="department">Department</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="department"
                                        value={selectedProject?.department}
                                        disabled
                                    />
                                </div>
                                <div
                                    class="form-group
                                "
                                >
                                    <label for="employee_name">
                                        Submitted By
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="employee_name"
                                        value={selectedProject?.employee_name}
                                        disabled
                                    />
                                </div>
                                <div
                                    class="form-group
                                "
                                >
                                    <label for="due_date">Date Due</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="due_date"
                                        value={selectedProject?.due_date}
                                        disabled
                                    />
                                </div>
                                <div
                                    class="form-group
                                "
                                >
                                    <label for="project_manager">
                                        Managed By
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="project_manager"
                                        value={selectedProject?.project_manager}
                                        disabled
                                    />
                                </div>
                                <div
                                    class="form-group

                                "
                                >
                                    <label for="contract_status">
                                        Contract
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="contract_status"
                                        value={
                                            selectedProject?.contract_status ==
                                            0
                                                ? "N/A"
                                                : "Signed"
                                        }
                                        disabled
                                    />
                                </div>
                                <div
                                    class="form-group
                                "
                                >
                                    <label for="total_cost">Cost</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="total_cost"
                                        value={selectedProject?.total_cost ?? 0}
                                        disabled
                                    />
                                </div>
                                {selectedProject?.tasks.length > 0 && (
                                    <div className="tasks max-h-40 overflow-y-auto">                                        <div
                                            class="card-title
                                        "
                                        >
                                            <span>Tasks</span>
                                        </div>
                                        <div class="table-responsive">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>S/N</th>
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {selectedProject?.tasks.map(
                                                        (task, index) => (
                                                            <tr key={task.id}>
                                                                <td>
                                                                    {index + 1}
                                                                </td>
                                                                <td>
                                                                    {task.name}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        task.description
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Modal>
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
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 0.25rem;
}

.card-title {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    color: #495057;
    text-align: center;
    font-weight: bold;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}

.card-bordered {
    border: 1px solid #e9ecef;
}

.card-inner {
    padding: 1.25rem;

}

.form-group {

    margin-bottom: 1.5rem;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control[disabled] {
    background-color: #e9ecef;
    opacity: 1;
}

.tasks {
    max-height: 200px;
}

.table-responsive {
    overflow-x: auto;

}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    border-radius: 0.25rem;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    color: #212529;
    background-color: #fff;
    border: 1px solid #e9ecef;
}

              `}</style>
        </AuthenticatedLayout>
    );
}
