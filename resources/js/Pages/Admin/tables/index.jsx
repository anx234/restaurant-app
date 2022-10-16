import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Button from "@/Components/Button";

export default function Index(props) {
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        destory(route("table.destroy", id), {
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
                    table
                </h2>
                
            }
        >
{/* 
            <div className="p-6 bg-white border-b border-gray-200">
                {flash.message && <div class="alert">{flash.message}</div>}
            </div> */}

            <div className="py-12">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">

                    <div className="mt-4">
                        <Link href={route("admin.tables.create")}>
                            <Button type="button">新規作成</Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="p-6 bg-white border-b border-gray-200">
                <table className="mx-auto">
                    <thead>
                        <tr>
                            <th>タイトル</th>
                            <th>コンテンツ</th>
                            <th>更新</th>
                            <th>削除</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.tables.map((table) => {
                            return (
                                <tr key={table.id}>
                                    <td className="border px-4 py-2">
                                        <Link
                                            href={route("table.show", table.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            {table.title}
                                        </Link>
                                    </td>
                                    <td className="border px-4 py-2">
                                        {table.content}
                                    </td>
                                    <td className="border px-4 py-2">
                                        <Link
                                            href={route("table.edit", table.id)}
                                            className="flex items-center px-6 py-4 focus:text-indigo-700 focus:outline-none"
                                        >
                                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                                                更新
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="border px-4 py-2">
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold"
                                            onClick={() =>
                                                handleDelete(table.id)
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
            </div> */}
        </AuthenticatedLayout>
    );
}