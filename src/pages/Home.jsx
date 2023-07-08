//import "../styles/home.css"
import profile from '../assets/profile.jpg'

export default function Home(){
    return (
        <>
        <div className="flex border-none rounded-lg  bg-teal-50">
            
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-3/5 justify-center">
                    <div className="text-7xl mb-4">
                        Hi! I am Chet Baloglu.
                    </div>
                    <div className="text-2xl">
                        Software Engineer and Biologist. Loves python, javascript and machine learning.
                    </div>
                </div>
                <div className="w-full md:w-2/5">
                    <img src={profile} className="border-none rounded-md"></img>
                </div>
            </div>
            </div>
        </>
    )
}