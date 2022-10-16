import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Inertia } from '@inertiajs/inertia'


const Create = (props) => {
    const { data, setData, errors, post } = useForm({
        name: "",
        description: "",
        image_path: "",
    });

    const [file, setFile] = useState();

    function handleSubmit(e) {
        e.preventDefault();
   // Inertia.post('/admin/categories/store',data);
        post(route("admin.categories.store"));
        // Inertia.post(`/admin/categories/store`, {
        //     _method: 'put',
        //     image: data.image,
        //   })
    }

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
                            <span className="font-medium text-indigo-600">
                                {" "}
                                /{" "}
                            </span>
                            Create
                        </h1>
                    </div>
                    <div className="max-w-6xl p-8 bg-white rounded shadow">
                        <form
                            name="createForm"
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
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
                                    <input
                                    id="image"
                                    name="image"
                                        type="file"
                                        onChange={(e) =>{
                                            console.log(e.target.files);
                                            setFile(URL.createObjectURL(e.target.files[0]));
                                            setData("image_path", e.target.files[0])
                                        }
                                            

                                        }
                                    />
                                    {/* <input
                                        type="file"
                                        value={data.image}
                                        onChange={handleChange}
                                    /> */}

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
};

export default Create;
