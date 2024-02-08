import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/Footer";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div class="nk-content ">
                <div class="container-fluid">
                    <div class="nk-content-inner">
                        <div class="nk-content-body">
                            <div class="nk-block">
                                <div class="row g-gs">
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-purple">
                                                                <span>DD</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Dashlite
                                                                    Development
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Softnio
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Design and develop
                                                            the DashLite
                                                            template for Envato
                                                            Marketplace.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    3 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                93.5%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="93.5"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-primary">
                                                                    <span>
                                                                        A
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-blue"></div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar bg-light sm">
                                                                    <span>
                                                                        +12
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-warning">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                5 Days Left
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-warning">
                                                                <span>RW</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Redesign
                                                                    Website
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Runnergy
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Design the website
                                                            for Runnergy main
                                                            website including
                                                            their user
                                                            dashboard.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    25 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                23%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="23"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-blue">
                                                                    <span>
                                                                        N
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-light text-gray">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                21 Days Left
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-info">
                                                                <span>KR</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Keyword
                                                                    Research for
                                                                    SEO
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Techyspec
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Improve SEO keyword
                                                            research, A/B
                                                            testing, Local
                                                            market improvement.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    2 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                52.5%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="52.5"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-danger">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                Due Tomorrow
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-danger">
                                                                <span>WD</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Website
                                                                    Development
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Fitness Next
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Develop the website
                                                            using WordPree for
                                                            the Fitness Next
                                                            client.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    44 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                65.5%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="65.5"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-blue">
                                                                    <span>
                                                                        N
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-light text-gray">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                16 Days Left
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-info">
                                                                <span>KR</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Keyword
                                                                    Research for
                                                                    SEO
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Techyspec
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Improve SEO keyword
                                                            research, A/B
                                                            testing, Local
                                                            market improvement.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    8 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                100%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="100"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-success">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>Done</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-purple">
                                                                <span>DD</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Dashlite
                                                                    Development
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Softnio
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Design and develop
                                                            the DashLite
                                                            template for Envato
                                                            Marketplace.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    3 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                93.5%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="93.5"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-primary">
                                                                    <span>
                                                                        A
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-blue"></div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar bg-light sm">
                                                                    <span>
                                                                        +12
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-warning">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                5 Days Left
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-danger">
                                                                <span>WD</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Website
                                                                    Development
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Fitness Next
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Develop the website
                                                            using WordPree for
                                                            the Fitness Next
                                                            client.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    44 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                65.5%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="65.5"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-blue">
                                                                    <span>
                                                                        N
                                                                    </span>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-light text-gray">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                16 Days Left
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4 col-xxl-3">
                                        <div class="card card-bordered h-100">
                                            <div class="card-inner">
                                                <div class="project">
                                                    <div class="project-head">
                                                        <a
                                                            href="html/apps-kanban.html"
                                                            class="project-title"
                                                        >
                                                            <div class="user-avatar sq bg-warning">
                                                                <span>RW</span>
                                                            </div>
                                                            <div class="project-info">
                                                                <h6 class="title">
                                                                    Redesign
                                                                    Website
                                                                </h6>
                                                                <span class="sub-text">
                                                                    Runnergy
                                                                </span>
                                                            </div>
                                                        </a>
                                                        <div class="drodown">
                                                            <a
                                                                href="#"
                                                                class="dropdown-toggle btn btn-sm btn-icon btn-trigger mt-n1 me-n1"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <em class="icon ni ni-more-h"></em>
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-end">
                                                                <ul class="link-list-opt no-bdr">
                                                                    <li>
                                                                        <a href="html/apps-kanban.html">
                                                                            <em class="icon ni ni-eye"></em>
                                                                            <span>
                                                                                View
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-edit"></em>
                                                                            <span>
                                                                                Edit
                                                                                Project
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#">
                                                                            <em class="icon ni ni-check-round-cut"></em>
                                                                            <span>
                                                                                Mark
                                                                                As
                                                                                Done
                                                                            </span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="project-details">
                                                        <p>
                                                            Design the website
                                                            for Runnergy main
                                                            website including
                                                            their user
                                                            dashboard.
                                                        </p>
                                                    </div>
                                                    <div class="project-progress">
                                                        <div class="project-progress-details">
                                                            <div class="project-progress-task">
                                                                <em class="icon ni ni-check-round-cut"></em>
                                                                <span>
                                                                    25 Tasks
                                                                </span>
                                                            </div>
                                                            <div class="project-progress-percent">
                                                                23%
                                                            </div>
                                                        </div>
                                                        <div class="progress progress-pill progress-md bg-light">
                                                            <div
                                                                class="progress-bar"
                                                                data-progress="23"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="project-meta">
                                                        <ul class="project-users g-1">
                                                            <li>
                                                                <div class="user-avatar sm bg-primary"></div>
                                                            </li>
                                                            <li>
                                                                <div class="user-avatar sm bg-blue">
                                                                    <span>
                                                                        N
                                                                    </span>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <span class="badge badge-dim bg-light text-gray">
                                                            <em class="icon ni ni-clock"></em>
                                                            <span>
                                                                21 Days Left
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                {" "}
                <Footer />
            </div>
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
                .nk-content {
                    padding: 0px;
                    height: 100%;

                }
                .nk-content-inner {
                    padding: 0px;
                    height: 100%;
                }
                .nk-content-body {
                    padding: 0px;
                    height: 100%;
                }

                .nk-block {
                    padding: 0px;
                    height: 100%;
                }

                .card {
                    margin-bottom: 20px;
                }

                .card-inner {
                    padding: 20px;
                }

                .card-bordered {
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                }

                .h-100 {
                    height: 100%;
                }

                .project {
                    position: relative;
                    padding: 0;
                    border-radius: 8px;
                    overflow: hidden;
                    background-color: #fff;
                }

                .project-head {
                    display: flex;
                    align-items: center;
                    padding: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .project-title {
                    display: flex;
                    align-items: center;
                    color: #212529;
                    text-decoration: none;
                }

                .project-title .user-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 10px;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    font-size: 14px;
                    font-weight: 600;
                    color: #fff;
                }

                .project-info {
                    display: flex;
                    flex-direction: column;
                }

                .project-info .title {
                    font-size: 16px;
                    font-weight: 600;
                }

                .project-info .sub-text {
                    font-size: 14px;
                    color: #6e7687;
                }

                .drodown {
                    margin-left: auto;
                }

                .project-details {
                    padding: 20px;
                    border-bottom: 1px solid #e5e7eb;
                }

                .project-details p {
                    font-size: 14px;
                    color: #6e7687;
                }

                .project-progress {
                    display: flex;
                    align-items: center;
                    padding: 20px;
                }

                .project-progress-details {
                    display: flex;
                    align-items: center;
                    margin-right: auto;
                }

                .project-progress-task {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    font-size: 14px;
                    color: #6e7687;
                }

                .project-progress-task em {
                    margin-right: 5px;
                    font-size: 16px;
                    color: #6e7687;
                }

                .project-progress-percent {
                    font-size: 16px;
                    font-weight: 600;
                }

                .progress {
                    width: 100%;
                    height: 8px;
                    border-radius: 4px;
                    background-color: #f2f4f8;
                }

                .progress-bar {
                    height: 100%;
                    border-radius: 4px;
                    background-color: #7987a1;
                }

                .project-meta {
                    display: flex;
                    align-items: center;
                    padding: 20px;
                }

                .project-users {
                    display: flex;
                    align-items: center;
                }

                .project-users li {
                    margin-right: 5px;
                }

                .project-users .user-avatar {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    font-size: 12px;
                    font-weight: 600;
                    color: #fff;
                }

                .project-users .bg-primary {
                    background-color: #5d78ff;
                }


                .project-users .bg-blue {
                    background-color: #2b96f1;
                }

                .project-users .bg-light {
                    background-color: #f6f9fc;
                    color: #6e7687;
                }

                .badge {
                    display: flex;
                    align-items: center;
                    padding: 8px 12px;
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 600;
                }

            
                `}</style>
        </AuthenticatedLayout>
    );
}
