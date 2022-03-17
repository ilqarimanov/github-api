import React, { Component } from 'react'
import img2 from '../img/2.jpg'

class Left extends Component {
    render() {
        return (
            <div className="left">
                <div className="repo d-flex justify-content-between align-items-center">
                     <p className="fw-bold">Repositories</p>
                     <button className="px-3 py-1  text-white">New</button>
                </div>
               
                <div className="name d-flex mt-3">
                    <img src={img2} alt="error" />
                    <p className="ms-2"> ilqarimanov / homework</p>
                </div>
                <div className="recent mt-3">   
                    <p className="fw-bold">Recent activity </p>
                    <p>ilqarimanov/ilqar</p>
                    <p>ilqarimanov/todolist</p>
                    <p>ilqarimanov/HomeWork</p>
                    <p>ilqarimanov/Imanov</p>
                    <p>ilqarimanov/todo</p>
                    <p>ilqarimanov/ilqarimanov123</p>
                </div>
            </div>
        )
    }
}

export default Left
