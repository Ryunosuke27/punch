import React from 'react'
import axios from 'axios';
import Buttons from './ContainedButtons'

const Api = () => {
    const punchMethod = (punchKind) =>{
        axios.post("https://ed1qsxnwla.execute-api.ap-northeast-1.amazonaws.com/prod/punch",
        punchKind)
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
