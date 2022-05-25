export default function Menu(){
    return(
        <div className="w-full h-16 bg-cyan-900 rounded-xl mt-2 flex absolute">
    <div className="w-2/12 h-16 flex border-r-2">
      <h1 className="ml-4 my-auto text-white">AQUI VAI A LOGO</h1>
    </div>

    <div className="w-7/12 h-16 flex">
      <p className="my-auto ml-4 text-white"><a href="">Application</a> Dashboard</p>
    </div>

    <div className="w-3/12 h-16 flex">
    <div className="my-auto w-56 h-10 rounded-full bg-white flex">
    <input type="text" className="my-auto mx-auto" />
    </div>
    </div>
  </div>
    )
}