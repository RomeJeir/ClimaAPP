import React from "react"

export default function Error({ mensaje }) {

    return (
        <>
            <div className="alert alert-danger width" role="alert">{mensaje}</div>
        </>
    )

}