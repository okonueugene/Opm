import { Link, Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import Modal from "@/Components/Modal";

export default function Home({ auth, departments, employees, projects }) {
    const [isDeclareProjectModalOpen, setIsDeclareProjectModalOpen] =
        useState(false);
    const [isPostRequisitionModalOpen, setIsPostRequisitionModalOpen] =
        useState(false);
    const [items, setItems] = useState([]);

    const [tasks, setTasks] = useState([]);

    const openDeclareProjectModal = () => {
        setIsDeclareProjectModalOpen(true);
    };

    const closeDeclareProjectModal = () => {
        setIsDeclareProjectModalOpen(false);
    };

    const openPostRequisitionModal = () => {
        setIsPostRequisitionModalOpen(true);
    };

    const closePostRequisitionModal = () => {
        setIsPostRequisitionModalOpen(false);
    };
    const handleAddItem = () => {
        setItems([
            ...items,
            { description: "", quantity: 0, unitPrice: 0, total: 0 },
        ]);
    };

    const handleAddTask = () => {
        setTasks([...tasks, { task_name: "", task_description: "" }]);
    };

    // Function to handle updating an item
    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items];
        if (field === "quantity" || field === "unitPrice") {
            // If quantity or unitPrice changes, update the total
            updatedItems[index][field] = parseFloat(value);
            updatedItems[index].total =
                updatedItems[index].quantity * updatedItems[index].unitPrice;
        } else {
            updatedItems[index][field] = value;
        }
        setItems(updatedItems);
    };

    // Function to handle removing an item
    const handleRemoveItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    // Function to handle updating a task
    const handleTaskChange = (index, field, value) => {
        const updatedTasks = [...tasks];
        updatedTasks[index][field] = value;
        setTasks(updatedTasks);
    };

    // Function to handle removing a task
    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    const departmentsArray = Object.keys(departments).map((key) => {
        return departments[key];
    });

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            budget: formData.get("budget"),
            due_date: formData.get("due_date"),
            deposit_status: formData.get("deposit"),
            contract_status: formData.get("checked_contract"),
            prepared_by: formData.get("prepared_by"),
            department: formData.get("department"),
            project_manager: formData.get("project_manager"),
            project_client: formData.get("project_client"),
            tasks: tasks,
        };
        console.log(data);
        // Send the data to the server
        let url = route("addProject");

        //use axios to send the data to the server
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    alert("Project declared successfully");

                    //clear the form
                    e.target.reset();

                    //clear the tasks
                    setTasks([]);
                } else {
                    alert("An error occurred while declaring the project");
                }
            })
            .catch((error) => {
                console.log(error);

                if (error.response) {
                    console.log(error.response.data);
                }
            });

        // Close the modal
        closeDeclareProjectModal();
    };

    const handleRequisitionSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            project_id: formData.get("project_id"),
            employee_id: formData.get("requisitioner"),
            vendor: formData.get("vendor_name"),
            department: formData.get("department"),
            items: items,
        };
        console.log(data);
        // Send the data to the server
        let url = route("addRequisition");

        //use axios to send the data to the server
        axios
            .post(url, data)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    alert(response.data.message);

                    //clear the form
                    e.target.reset();

                    //clear the items
                    setItems([]);
                } else {
                    alert("An error occurred while posting the requisition");
                }
            })
            .catch((error) => {
                console.log(error);

                if (error.response) {
                    console.log(error.response.data);
                    alert("An error occurred while posting the requisition");
                }
            });

        // Close the modal
        closePostRequisitionModal();
    };
    return (
        <>
            <Head title="Home" />

            <div className="relative md:flex md:justify-center md:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="logo">
                    <img
                        src="https://www.opticom.co.ke/wp-content/uploads/2023/03/cropped-Opticom-Logo-18.png"
                        alt="Opticom Projects"
                    />
                </div>
                <div className="md:fixed md:top-0 md:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-md focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-md focus:outline-red-500"
                            >
                                Log In
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8 flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl md:tracking-tight lg:text-6xl">
                            <span className="block xl:inline">
                                Opticom Projects
                            </span>
                        </h1>
                        <div className="buttons">
                            <ul className="mt-10 flex flex-col items-center space-y-3 md:space-y-0 md:flex-row md:space-x-3">
                                <li className="md:order-2">
                                    <Link
                                        href="javascript:void(0)"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openDeclareProjectModal();
                                        }}
                                        className="px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Declare a Project
                                    </Link>
                                </li>
                                <li className="md:order-1">
                                    <Link
                                        href="javascript:void(0)"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openPostRequisitionModal();
                                        }}
                                        className="px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-md text-red-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Post Requisition
                                    </Link>
                                </li>
                            </ul>
                            {/* Declare Project Modal */}
                            <Modal
                                show={isDeclareProjectModalOpen}
                                onClose={() =>
                                    setIsDeclareProjectModalOpen(false)
                                }
                            >
                                <div className="p-6 max-h-screen overflow-y-auto">
                                    <div className="p-6">
                                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Declare a Project
                                        </div>
                                        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                            <form
                                                onSubmit={handleProjectSubmit}
                                            >
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="name"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Project Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Project Name"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="budjet"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Project Budget
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="budget"
                                                        id="budget"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Project Budjet"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="date"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Due Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="due_date"
                                                        id="due_date"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Due Date"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="deposit"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Deposit Status
                                                    </label>

                                                    <select
                                                        name="deposit"
                                                        id="deposit"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring

                                        -red-500 focus:border-red-500 sm:text-sm"
                                                        required
                                                    >
                                                        <option value="1">
                                                            Paid
                                                        </option>
                                                        <option value="2">
                                                            Not Paid
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="checked_contract"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Checked Contract
                                                    </label>

                                                    <select
                                                        name="checked_contract"
                                                        id="checked_contract"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring
                                        -red-500 focus:border-red-500 sm:text-sm"
                                                        required
                                                    >
                                                        <option value="1">
                                                            Yes
                                                        </option>
                                                        <option value="2">
                                                            No
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="prepared_by"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Prepared By
                                                    </label>
                                                    <select
                                                        name="prepared_by"
                                                        id="prepared_by"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Prepared By"
                                                        required
                                                    >
                                                        {employees.map(
                                                            (
                                                                employee,
                                                                index
                                                            ) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        employee.id
                                                                    }
                                                                >
                                                                    {
                                                                        employee.name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="department"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Department
                                                    </label>
                                                    <select
                                                        name="department"
                                                        id="department"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        required
                                                    >
                                                        {departmentsArray.map(
                                                            (
                                                                department,
                                                                index
                                                            ) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        department
                                                                    }
                                                                >
                                                                    {department}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="project_manager"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Project Manager
                                                    </label>
                                                    <select
                                                        name="project_manager"
                                                        id="project_manager"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Project Manager"
                                                        required
                                                    >
                                                        {employees.map(
                                                            (
                                                                employee,
                                                                index
                                                            ) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        employee.name
                                                                    }
                                                                >
                                                                    {
                                                                        employee.name
                                                                    }
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="project_client"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Project Client
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="project_client"
                                                        id="project_client"
                                                        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="Project Client"
                                                        required
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label
                                                        htmlFor="tasks"
                                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                    >
                                                        Tasks
                                                    </label>
                                                    <div className="max-h-40 overflow-y-auto">
                                                        {tasks.map(
                                                            (task, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex items-center space-x-2 mb-2"
                                                                >
                                                                    <input
                                                                        type="text"
                                                                        value={
                                                                            task.task_name
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleTaskChange(
                                                                                index,
                                                                                "task_name",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        placeholder="Task Name"
                                                                        className="block w-1/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                                    />
                                                                    <input
                                                                        type="text"
                                                                        value={
                                                                            task.task_description
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleTaskChange(
                                                                                index,
                                                                                "task_description",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        placeholder="Task Description"
                                                                        className="block w-1/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            handleRemoveTask(
                                                                                index
                                                                            )
                                                                        }
                                                                        className="inline-flex float-end px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            )
                                                        )}
                                                        <div className="add-item">
                                                            <button
                                                                type="button"
                                                                onClick={
                                                                    handleAddTask
                                                                }
                                                                className="inline-flex float-end px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                            >
                                                                Add Task
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4">
                                                    <button
                                                        type="submit"
                                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                    >
                                                        Declare Project
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={
                                                            closeDeclareProjectModal
                                                        }
                                                        className="inline-flex float-end px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                            {/* Post Requisition Modal */}
                            <Modal
                                show={isPostRequisitionModalOpen}
                                onClose={() =>
                                    setIsPostRequisitionModalOpen(false)
                                }
                            >
                                <div className="p-6 max-h-screen overflow-y-auto">
                                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Post Requisition
                                    </div>
                                    <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                        <form
                                            onSubmit={handleRequisitionSubmit}
                                        >
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="project_id"
                                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                ></label>
                                                Project Name
                                                <select
                                                    name="project_id"
                                                    id="project_id"
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Project Name"
                                                    required
                                                >
                                                    {projects.map(
                                                        (project, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    project.id
                                                                }
                                                            >
                                                                {project.name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="name"
                                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                    Requisitioner Name
                                                </label>
                                                <select
                                                    name="requisitioner"
                                                    id="requisitioner"
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Requisitioner Name"
                                                    required
                                                >
                                                    {employees.map(
                                                        (employee, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    employee.id
                                                                }
                                                            >
                                                                {employee.name}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="item"
                                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                    Vendor Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="vendor_name"
                                                    id="vendor_name"
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Vendor Name"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="department"
                                                    className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                    Department
                                                </label>
                                                <select
                                                    name="department"
                                                    id="department"
                                                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    required
                                                >
                                                    {departmentsArray.map(
                                                        (department, index) => (
                                                            <option
                                                                key={index}
                                                                value={
                                                                    department
                                                                }
                                                            >
                                                                {department}
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                                                    Items
                                                </label>
                                                <div className="flex items-center space-x-2 mb-2 font-semibold">
                                                    <div className="w-1/3">
                                                        Description
                                                    </div>
                                                    <div className="w-1/6">
                                                        Quantity
                                                    </div>
                                                    <div className="w-1/6">
                                                        Unit Price
                                                    </div>
                                                    <div className="w-1/6">
                                                        Total
                                                    </div>
                                                    <div className="w-1/6">
                                                        Actions
                                                    </div>
                                                </div>
                                                <div className="max-h-70 overflow-y-auto">
                                                    {items.map(
                                                        (item, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center space-x-2 mb-2"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    value={
                                                                        item.description
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleItemChange(
                                                                            index,
                                                                            "description",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Description"
                                                                    className="block w-1/3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                                />
                                                                <input
                                                                    type="number"
                                                                    value={
                                                                        item.quantity
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleItemChange(
                                                                            index,
                                                                            "quantity",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Quantity"
                                                                    className="block w-1/6 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                                />
                                                                <input
                                                                    type="number"
                                                                    value={
                                                                        item.unitPrice
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleItemChange(
                                                                            index,
                                                                            "unitPrice",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Unit Price"
                                                                    className="block w-1/6 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                                />
                                                                <span className="w-1/6 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-gray-600 dark:text-gray-400">
                                                                    Total: $
                                                                    {item.total.toFixed(
                                                                        2
                                                                    )}
                                                                </span>
                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        handleRemoveItem(
                                                                            index
                                                                        )
                                                                    }
                                                                    className="inline-flex float-end px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                                >
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        )
                                                    )}
                                                    <div className="add-item">
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                handleAddItem
                                                            }
                                                            className="inline-flex float-end px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                        >
                                                            Add Item
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                >
                                                    Post Requisition
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={
                                                        closePostRequisitionModal
                                                    }
                                                    className="inline-flex float-end px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #00a09a;
                }

                .buttons{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }
                .buttons ul{
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    padding: 20px;
                }
                .buttons ul li{
                    list-style: none;
                    margin: 0 20px;
                }
                .buttons ul li a{
                    text-decoration: none;
                }

                .logo{
                    position: absolute;
                    top: 0;
                    left: 45%;
                    margin: 20px;
                }
                .logo img{
                    width: 150px;
                    height: 150px;
                }
                .add-item{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    align-items: center;
                    margin-top: 20px;
                }

            `}</style>
        </>
    );
}
