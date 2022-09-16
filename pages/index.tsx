import React from 'react';
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";

const Index = () => {
    return (
        <>
            <MainLayout>
                <div className='center'>
                    <h1>Welcome!</h1>
                    <h3>Here you will find the best tracks</h3>
                </div>
            </MainLayout>

            <style jsx>{`
              .center {
                margin-top: 110px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
            `}</style>
        </>

    );
};

export default Index;