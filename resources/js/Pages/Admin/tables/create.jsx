import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import InputLabel from "@/Components/InputLabel";
import Button from "@/Components/Button";

export default function Create(props) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        guest_number: "",
        status: "",
        location: "",

    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.tables.store"));
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Blog
                </h2>
            }
        >
            <Head title="Blog Create" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
  
                            <form onSubmit={submit}>
                                <div>
                                    <InputLabel forInput="name" value="Name" />

                                    <Input
                                        type="text"
                                        name="name"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel forInput="guest_number" value="Guest_number" />

                                    <Input
                                        type="text"
                                        name="guest_number"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel forInput="status" value="Status" />

                                    <Input
                                        type="text"
                                        name="status"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                </div>
                                <div>
                                    <InputLabel forInput="location" value="Location" />

                                    <Input
                                        type="text"
                                        name="location"
                                        value={data.content}
                                        className="mt-1 block w-full"
                                        handleChange={onHandleChange}
                                    />
                                    <input type="file" />
                                </div>

                                <div className="flex items-center justify-end mt-4">
                                    <Button
                                        className="ml-4"
                                        processing={processing}
                                    >
                                        作成
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}