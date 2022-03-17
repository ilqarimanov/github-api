import React, { Component } from 'react'

export class Right extends Component {
    render() {
        return (
            <div className="right">
                <p className="fw-bold mt-2">Explore repositories</p>
                <div className="boxes">
                    <div className="box">
                        <p className="mt-4"><span> containerd/containerd </span><br /> 
                        An open and reliable container runtime</p>

                        <div className="javascript d-flex">
                            <div className="yellow mt-1 me-2"></div>
                            <p>Go</p>
                            <i className="far fa-star ms-5 mt-1"></i>
                            <p className="ms-2">23.1k</p>
                        </div>
                    </div>

                    <div className="box">
                        <p className="mt-4"><span>Azure/azure-sdk-for-python</span><br /> 
                        This repository is for active development of the Azure SDK for Python. For consumers of the SDK we recommend visiting our public developer docs at https://docs.microsoft.com/python/azure/ or our ve…</p>

                        <div className="javascript d-flex">
                            <div className="yellow mt-1 me-2"></div>
                            <p>Python</p>
                            <i className="far fa-star ms-5 mt-1"></i>
                            <p className="ms-2">30</p>
                        </div>
                    </div>

                    <div className="box">
                        <p className="mt-4"><span> Azure/iotedge-lorawan-starterkits </span><br /> a
                        Experimental sample implementation of LoRaWAN components to connect LoRaWAN antenna gateway running IoT Edge directly with Azure IoT.</p>

                        <div className="javascript d-flex">
                            <div className="yellow mt-1 me-2"></div>
                            <p>C# </p>
                            <i className="far fa-star ms-5 mt-1"></i>
                            <p className="ms-2">32.5kk</p>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Right
