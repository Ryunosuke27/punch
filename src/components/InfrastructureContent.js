import React from 'react'

const InfrastructureContent = () => {
    return (
        <div className="infrastructureContent">
            <div className="img">
                <img src={`${process.env.PUBLIC_URL}/Infrastructure.png`} alt="Image"/>
            </div>
        </div>
    )
}

export default InfrastructureContent
