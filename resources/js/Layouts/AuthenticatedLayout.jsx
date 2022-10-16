import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex items-start justify-between">
                <div className="h-screen hidden lg:block shadow-lg relative w-80">
                    <div className="bg-white h-full dark:bg-gray-700">
                        <div className="flex items-center justify-start pt-6 ml-8">
                            <div className="flex">
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        <span className="text-xl">
                                        Dashboard

                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <nav className="mt-6">
                            <div>
                                <a
                                    className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        Home
                                    </span>
                                </a>
                                <a
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href="#"
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 2048 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-2 text-sm font-normal">
                                        Refered Projects
                                        <span className="p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs">
                                            0
                                        </span>
                                    </span>
                                </a>
                                <Link
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href={route('admin.menus.index')}
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                    Menu
                                    </span>
                                </Link>
                                <Link
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href={route('admin.categories.index')}
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                    Category
                                    </span>
                                </Link>
                                <Link
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href={route('admin.tables.index')}
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                    Table
                                    </span>
                                </Link>
                                <Link
                                    className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent"
                                    href={route('admin.reservations.index')}
                                >
                                    <span className="text-left">
                                        <svg
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 1792 1792"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"></path>
                                        </svg>
                                    </span>
                                    <span className="mx-4 text-sm font-normal">
                                    Reservation
                                    </span>
                                </Link>


                                <div className="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent">
                                    <div className="flex justify-between h-16">
                                        <div className="hidden sm:flex sm:items-center">
                                            <div className="ml-3 relative">
                                                <Dropdown>
                                                    <Dropdown.Trigger>
                                                        <span className="inline-flex rounded-md">
                                                            <button
                                                                type="button"
                                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                            >
                                                                {auth.user.name}

                                                                <svg
                                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 20 20"
                                                                    fill="currentColor"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </span>
                                                    </Dropdown.Trigger>

                                                    <Dropdown.Content>
                                                        <Dropdown.Link
                                                            href={route(
                                                                "logout"
                                                            )}
                                                            method="post"
                                                            as="button"
                                                        >
                                                            Log Out
                                                        </Dropdown.Link>
                                                    </Dropdown.Content>
                                                </Dropdown>
                                            </div>
                                        </div>

                                        <div className="-mr-2 flex items-center sm:hidden">
                                            <button
                                                onClick={() =>
                                                    setShowingNavigationDropdown(
                                                        (previousState) =>
                                                            !previousState
                                                    )
                                                }
                                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                            >
                                                <svg
                                                    className="h-6 w-6"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        className={
                                                            !showingNavigationDropdown
                                                                ? "inline-flex"
                                                                : "hidden"
                                                        }
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                    <path
                                                        className={
                                                            showingNavigationDropdown
                                                                ? "inline-flex"
                                                                : "hidden"
                                                        }
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="flex flex-col w-full md:space-y-4">
                    <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
