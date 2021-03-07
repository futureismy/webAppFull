import React from 'react'
import { Fragment } from 'react';

export default function BookingSteatHistoryItem(props) {
    const   index =props.booking;
 
    const bookingGeat = ()=>{
        return index.map((item,index) => (
            <Fragment key={index}>
               <tr>
            <td >{item.tenHeThongRap}</td>
            <td>{item.tenRap}</td>
            <td>{item.maRap}</td>
            <td>{item.maGhe}</td>
            <td>{item.tenGhe}</td>
            
            </tr>
            </Fragment>
        ))
    }

   
    return (
        <div >
             <table className="table table-info text-center">
                        <thead>
                            <tr>
                                <th>Tên Hệ Thống Rạp</th>
                                <th>Tên Rạp</th>
                                <th>Mã Rạp</th>
                                <th>Mã Ghế</th>
                                <th>Tên Ghế</th>
                            </tr>
                        </thead>
                        <tbody>
                        {bookingGeat()}
                       
                        </tbody>
                    </table>
        </div>
    )
}
