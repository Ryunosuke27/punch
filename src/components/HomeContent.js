import React from 'react'
import axios from 'axios';
import Buttons from './ContainedButtons'
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    punch:{
        display:'flex'
    }
}));

const Api = () => {
    const classes = useStyles();
    const punchMethod = (id) => {
        const api = "https://ed1qsxnwla.execute-api.ap-northeast-1.amazonaws.com/prod/punch";
        const data = {"punchKind": id};
        axios
            .post(api,data)
            .then((response) =>{
                console.log(response);
            });
    }

    return (
        <div className={classes.root}>
            <div className="homeContent">
        {/* {console.log("ok")} */}
            <h1 className="h1">勤怠管理を驚くほどカンタンに</h1>
            <h4>勤務時間を記録するアプリ</h4>
            <h4>・打刻</h4>
            <div className={classes.punch}>
                <Buttons
                    text = "開始"
                    punchMethod = {() => punchMethod("1")}
                />
                <Buttons
                    text = "終了"
                    punchMethod = {() => punchMethod("2")}
                />
            </div>
            <h4>・今月の勤務表(CSV)</h4>
            <Buttons
                    text = "ダウンロード"
                    punchMethod = {() => punchMethod("3")}
                />
            </div>
        </div>
    )
}

export default Api
