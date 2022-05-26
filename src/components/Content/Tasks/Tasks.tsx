export default function Tasks() {
    return (
        <div className="w-auto mt-9 mx-6 h-96 bg-gray-100 flex-col rounded-lg">
            <div className="w-full h-10 bg-white mx-auto flex rounded-md">
                <p className="justify-start ml-7">Task Name</p>
                <p className="mx-auto">Tasks Specifications</p>
                <p className="justify-end mr-7">Deadline</p>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg ">
                <div className="justify-start ml-7 flex items-center ">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:top-2 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg checked:bg-green-300">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            
        </div>
    )
}