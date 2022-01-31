import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function DisConnectedAlert() {
    const nevigate = useNavigate();
    function callbeck() {
        nevigate('/Login')
    }
    return (
        < div style={{height:'72vh'}}>
            <div className="alert alert-danger alert-dismissible">
                אווופס עדיין לא נכנסת למערכת
                <a onClick={callbeck} className="close" data-dismiss="alert" aria-label="close"> להתחברות/הרשמה לחץ כאן</a>
                <strong></strong>
            </div>
        </div>
    )
}