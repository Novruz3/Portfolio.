import React from 'react'
import { Header } from './../components/header/Header';

export const Home = () => {
    return (
        <div>
            <Header />
            <main className="section">
                <div className="container">
                <ul className="content-list">
                        <li className="content-list__item">
                            <p style={{color : "blue"}} className="title-2">Skills</p>
                            <p className='skills__item'>HTML, CSS, Javascript, Bootstrap, React JS, Next JS, Typescript, Tailwind CSS, Redux Toolkit, Zustand, Github, Axios, Rest API</p>
                        </li>
                        <li className="content-list__item">
                            <p style={{color : "blue"}} className="title-2">Languages</p>
                            <p className='skills__item'>Turkmen, Russian, English</p>
                        </li>
                        <li className="content-list__item">
                            <p style={{color : "blue"}} className="title-2">Experience</p>
<<<<<<< HEAD
                            <div>
                                <p style={{fontSize:"28px", fontWeight:'800'}} className='skills__item__2'>Geek Space </p>
                                <p style={{fontSize:"28px", fontWeight:'500'}} className='skills__item'>Frontend Developer </p>
                                <p style={{fontSize: "24px"}} className='skills__item'>February 2024 - August 2024</p>
                            </div>
                            <div style={{marginTop:'30px',borderTop : "1px solid black", paddingTop:"20px"}}>
                                <p style={{fontSize:"28px", fontWeight:'800'}} className='skills__item__2'>Bereket Bendi HJ </p>
                                <p style={{fontSize:"28px", fontWeight:'500'}} className='skills__item'>Frontend Developer </p>
                                <p style={{fontSize: "24px"}} className='skills__item'>August 2024 - Present</p>
                            </div>
=======
                            <p className='skills__item__2'>Geek Space </p>
                            <p style={{fontSize:"28px", fontWeight:'600'}} className='skills__item'>Frontend Developer </p>
                            <p style={{fontSize: "24px"}} className='skills__item'>February 2024 - Present</p>
>>>>>>> 1f9616a98f5ef761d96a26c70633f4d3ef0ceab1
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
