import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";

export default function Edit(props) {
    const { data, setData, post, errors } = useForm({
        name: props.category.name,
        description: props.category.description,
        image: undefined,
        _method: 'PUT'
    });
    const [file, setFile] = useState(props.category.image_path);

    const handleSubmit = (e) => {
        e.preventDefault();
       // Inertia.post('/admin/categories/update',data);
       post(route("admin.categories.update", props.category.id));
    };

    const onHandleChange = (e) => {
         console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setData("image", e.target.files[0])
        //setData(e.target.name, e.target.value);
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
            <div className="mt-20">
                <div className="container flex flex-col justify-center mx-auto">
                    <div>
                        <h1 className="mb-8 text-3xl font-bold">
                             Edit
                        </h1>
                    </div>
                    <div className="max-w-6xl p-8 bg-white rounded shadow">
                        <form
                            name="editForm"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col">
                                <div className="mb-4">
                                    <label className="">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2"
                                        label="Name"
                                        name="name"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.name}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label className="">Description</label>
                                    <textarea
                                        type="text"
                                        className="w-full rounded"
                                        label="description"
                                        name="description"
                                        errors={errors.description}
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <span className="text-red-600">
                                        {errors.description}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label className="">image</label>
                                    {/* <input
                                    type="file"
                                    onChange={(e) =>
                                        setData("image", e.target.files[0])
                                    }
                                /> */}
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        name="image"
                                        onChange={onHandleChange
                                        }
                                    />
                                    <img src={file} />
                                    {/* <input type="file" value={data.avatar} onChange={e => setData('avatar', e.target.files[0])} /> */}
                                    <span className="text-red-600">
                                        {errors.image}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
