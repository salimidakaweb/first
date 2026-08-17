import React, { Children } from "react"
interface ICont {
    children: React.ReactNode
}

function Cont({ children }: ICont) {
    return (
        <div className="container mx-auto ">
            {children}
        </div>
    );
}

export default Cont