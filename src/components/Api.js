import React from 'react'
import axios from 'axios';
import Buttons from './ContainedButtons'

const Api = () => {
    const punchMethod = () =>{
        axios.post("https://ed1qsxnwla.execute-api.ap-northeast-1.amazonaws.com/prod/punch",
            {
                punchKind: "1"
            }
        );
    }
    return (
        <div>
            <Buttons
                text = "In"
                punchMethod = {() => punchMethod()}
            />
            <Buttons
                text = "Out"
                punchMethod = {() => punchMethod()}
            />
        </div>
    )
}

export default Api
