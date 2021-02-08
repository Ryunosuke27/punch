import React from 'react'
import axios from 'axios';
import Buttons from './ContainedButtons'

const Api = () => {
    const punchMethod = (id) =>{
        const req = {punchKind: id}
        axios.post("https://ed1qsxnwla.execute-api.ap-northeast-1.amazonaws.com/prod/punch",
            req,
            {
                headers: {
                  "Content-Type": "application/json",
                },
            });
    }
    return (
        <div>
            <Buttons
                text = "In"
                punchMethod = {() => punchMethod("1")}
            />
            <Buttons
                text = "Out"
                punchMethod = {() => punchMethod("2")}
            />
        </div>
    )
}

export default Api
