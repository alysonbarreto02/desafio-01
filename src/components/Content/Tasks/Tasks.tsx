export default function Tasks() {
    return (      
        <div className="w-auto mt-9 mx-6 h-96 bg-gray-100 flex-col rounded-lg">
            <div className="w-full h-10 bg-white mx-auto flex rounded-md">
                <ul className="flex ml-7">
                    <li className="my-auto font-bold">Tasks</li>
                    <li className="my-auto ml-7"><a href="./tks">Activities</a></li>
                </ul>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg ">
                <div className="justify-start ml-7 flex items-center ">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2 text-slate-800">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto text-slate-800">Escovar os dentes é muito importante pra saúde bocal</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto text-slate-800">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2 text-slate-800">Fazer freelance</h2>
                </div>
                <div className="mx-auto font-bold flex text-slate-800">
                    <p className="my-auto">Lorem ipsum dolor sit </p>
                </div>
                <div className="justify-end mr-7 font-bold flex text-slate-800">
                    <p className="my-auto">19/07/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2 text-slate-800">Fazer exercicios</h2>
                </div>
                <div className="mx-auto font-bold flex text-slate-800">
                    <p className="my-auto">Lorem ipsum dolor sit amet consectetur a</p>
                </div>
                <div className="justify-end mr-7 font-bold flex text-slate-800">
                    <p className="my-auto">01/09/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2 text-slate-800">Study english</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto ml-5 text-slate-800">   Hi, whats your name? My name is Nanem</p>
                </div>
                <div className="justify-end mr-7 font-bold flex text-slate-800">
                    <p className="my-auto">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2 text-slate-800">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto text-slate-800">Tapfijo alfsdijoas fldsikjsfp flasijsfç elfikejeefj</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto text-slate-800">27/05/2022</p>
                </div>
            </div>

            <div className="flex w-full h-11 bg-white relative hover:bottom-1 hover:shadow hover:shadow-bg-gray-100 border-y rounded-lg checked:bg-green-300">
                <div className="justify-start ml-7 flex items-center">
                    <input type="checkbox" className="mt-1"/>
                    <h2 className="font-bold ml-2 text-slate-800">Escovar os dentes</h2>
                </div>
                <div className="mx-auto font-bold flex">
                    <p className="my-auto text-slate-800">Akfdjsl odkadp asdokpad çaosdkda kçsado</p>
                </div>
                <div className="justify-end mr-7 font-bold flex">
                    <p className="my-auto text-slate-800">15/11/2022</p>
                </div>
            </div>

            
        </div>
    )
}