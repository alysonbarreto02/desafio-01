import { BsInstagram } from "react-icons/bs";
import { FiMail, FiTwitter } from "react-icons/fi";
import Tasks from "../Tasks/Tasks";

export default function Profile() {
    return (
        <div className="grid-cols-2 w-full">
            <div className="w-full h-36 flex">
                <p className="items-end mb-1 ml-6 flex font-bold text-2xl">Profile Layout</p>
            </div>

            <div className="w-auto h-72 mx-6 bg-white rounded-lg flex">
                <div className="w-4/12 h-56 ml-4 my-auto flex border-r">

                    <img src="assets/foto.png" className="w-32 h-32 mx-auto my-auto rounded-full" />
                    <div className="mx-auto my-auto ml-4 text-center">
                        <h2 className="my-auto mx-auto text-xl">Alyson Kevin</h2>
                        <span className="text-xs mt-32 mx-auto">Software Developer</span>
                    </div>

                </div>

                <div className="w-4/12 h-56 my-auto flex border-r">
                    <div className="h-10 absolute">
                        <h3 className="ml-3 font-bold">Contact details</h3>
                    </div>
                    <div className="flex">
                        <div className="flex-col my-auto ml-4    ">

                            <div className="flex mr-1 whitespace-nowrap">
                                <div className='mt-1 mr-2'><FiMail /></div>
                                <p> alysonkevin@left4code.com</p>
                            </div>

                            <div className="flex mr-28 whitespace-nowrap">
                                <div className='mt-1 mr-2'><BsInstagram /></div>
                                <p> Alyson Kevin</p>
                            </div>

                            <div className="flex mr-28 whitespace-nowrap">
                                <div className='mt-1 mr-2'><FiTwitter /></div>
                                <p> Alyson Kevin</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
            <Tasks />
        </div>
    )
}