import React from 'react'

export default function ButtonA(Props) {
    return (
        <div>
            <a className="btn btn-outline-primary btn-lg" type="button">
         {Props.Name}
        </a>
        </div>
    )
}
