import React from "react";
import { GpuNvidia } from './Data';
import "./List.css";

const Nvdia = () => {
    return(
        <div style={{}}>
        <h1>Nvidia Geforce Gpu's</h1>
        <ul className="ul">
            {GpuNvidia.map(item =>(
                <li className="li">
                    <p>{item.nama}</p>
                    <img src={item.image} alt="" />
                    <p>Compute unit : {item.cu}</p>
                    <p>Boost Frequency: {item.bf}</p>
                    <p>Core Count: {item.core}</p>
                    <p>Tmu: {item.tu}</p>
                    <p>Transistor Count: {item.tc}</p>
                    <p>Vram: {item.vr}</p>
                    <p>Bandwith: {item.bw}</p>
                    <p>PCIe Interfaces: {item.pc}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Nvdia