import React from 'react'
import Data from '../Assets/data.js'

const Test = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
        <table>
            <thead >
                <tr >
                    <th className="border">ID</th>
                    <th className="border">Name</th>
                    <th className="border">E-mail</th>
                    <th className="border">Location</th>
                </tr>
            </thead>
            <tbody>
                {Data.map((item,i)=>(
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.loc}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Test