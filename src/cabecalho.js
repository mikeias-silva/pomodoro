
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

class Header extends React.Component {
    render() {


        return (
            <div className="bg-pink-500 ">
                <div className="md:container md:mx-auto h-10 flex justify-between">

                    <div className="flex justify-center md:justify-start pt-1 shadow-2xl">
                        <h2 className="text-pink-50 ml-5 md:ml-0 text-xl ">Pomodoro</h2>
                    </div>
                    <div className=" justify-end pt-1  hidden md:flex ">
                        <h5 className=" text-pink-50 ml-5 mr-8">perfil</h5>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header