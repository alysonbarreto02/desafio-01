export function LineBall({status}) {
    console.log(status)
    return <div className="flex-col">
        <div className="w-14 h-4 flex">
            <img src="assets/white.png" alt="ball" className={`mx-auto rounded-full h-4 w-4 border-4 mt-1 
            ${status == "warning" ? 'border-yellow-600'  : 'border-gray-500' } 
            ${status == "error" ? 'border-red-600' : 'border-gray-500'}
            ${status == "normal" ? 'border-green-600'  : 'border-gray-500' }`}  />
        </div>
        <div className="w-7 h-24 border-r-2 border-slate-300"></div>
    </div>;
}
