import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import NavLink from "@/Components/NavLink";

export default function Index(props) {
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        destory(route("admin.menus.destroy", id), {
            preserveScroll: true,
        });
    };
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    categorie
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-4">
                        <NavLink href={route("admin.menus.create")}>
                            <Button type="button">新規作成</Button>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-white border-b border-gray-200">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-2/5">
                                タイトル
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-2/5">
                                内容
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-2/5">
                                金額
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/5"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.menus.map((menu) => {
                            return (
                                <tr key={menu.id}>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">
                                            <div className="flex-shrink-0 w-10 h-10">
                                                {menu.image_path && (
                                                    <img
                                                        src={menu.image_path}
                                                        className="w-full h-full rounded-full"
                                                    />
                                                )}
                                            </div>
                                            <div className="ml-3">
                                                <NavLink
                                                    href={route(
                                                        "admin.categories.show",
                                                        menu.id
                                                    )}
                                                    className="text-gray-900 whitespace-no-wrap"
                                                >
                                                    {menu.name}
                                                </NavLink>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {menu.description}
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {menu.price}
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">
                                            {menu.price}
                                        </p>
                                    </td>

                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <NavLink
                                            href={route(
                                                "admin.menus.edit",
                                                menu.id
                                            )}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                                                更新
                                            </button>
                                        </NavLink>

                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold"
                                            onClick={() =>
                                                handleDelete(menu.id)
                                            }
                                        >
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
}
