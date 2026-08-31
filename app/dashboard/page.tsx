"use client"
import Cont from "../comp/Cont";

export default function Dashboard() {
    return (
        <div className="bg-sky-300 p-4">
                <div className="grid grid-cols-3 gap-4 bg-white">
                    <input type="text" placeholder="title" />
                    <input type="text" placeholder="price" />
                    <input type="text" placeholder="image" />
                </div>
                <textarea className="w-full mt-4 bg-white" placeholder="des" />
                <button className="bg-sky-500 text-white rounded px-4 py-1">submit</button>
        </div>
    );
}

