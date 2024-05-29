import React from 'react'
import './Table.css'

export default function Table() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>App</th>
                        <th>Store URL</th>
                        <th>B.Type</th>
                        <th>No. of Calls</th>
                        <th>Review Asked</th>
                        <th>Review Given</th>
                        <th>Called This Month</th>
                        <th>Reason</th>
                        <th>Comment</th>
                        <th>Upadate/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="safeBg">
                        <td class="clSeriel">1</td>
                        <td class="appImg"><img src="/static/media/logoIb.a58e50d5c624a4e37f6b.png" alt="ib"/></td>
                        <td class="clstoreUrl">31e6bd-4</td>
                        <td class="clbType">Apparel, </td>
                        <td class="clNocalls">2</td>
                        <td class="clrevAsk">no, <span>Asked: 0</span> </td>
                        <td class="clrevGiv">no</td>
                        <td class="clCalledMonth">
                            <div title="Count">
                                <img class="icon" src="/static/media/count_icon.c3e67f786b976a1afdb99413654b003a.svg" alt="Count"/>
                                </div>
                                </td>
                        <td class="reason">left middle of the conversation; https://prnt.sc/Q5tzxZ2qH7dP</td>
                        <td class="clComment">No comment</td>
                        <td class="clBtnUpdateDel"><div title="Update">
                            <img class="icon" src="/static/media/update_icon.8f496e30515ccf603cc28219557d588d.svg" alt="Update"/></div><div title="Delete">
                            <img class="icon" src="/static/media/delete_icon.d68a83c554e93c1d9a3f2dc3cbf6129b.svg" alt="Delete"/></div></td>
                        </tr>


                </tbody>
            </table>
        </div>
    )
}
