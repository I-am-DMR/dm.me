import React from 'react'

export default function ButtonA(Props) {
    return (
        <div>
            <a className="btn btn-outline-primary btn-lg" type="button" target="_blank" href="https://www.linkedin.com/in/devamakeshr/">
         {Props.Name}
        </a>
        </div>
    )
}
