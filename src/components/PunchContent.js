import React from 'react'

const PunchContent = () => {
    return (
        <div className = "punchContent">
            <h1 className="title">Punchとは</h1>
            <p　className="contents">いわゆる勤怠管理アプリです。</p>
            <br/>
            <p className="contents">Punchは「毎日勤務時間を記録し、月末になると月間稼働時間を計算する」</p>
            <br/>
            <p className="contents">といった面倒な作業を大幅に簡素化します。</p>

            <h1 className="title">Punchの使い方</h1>
            <p　className="contents">勤務開始、終了時にそれぞれのボタンを押すだけで勤務時間を記録してくれます。</p>
            <br/>
            <p className="contents">また「ダウンロードボタンを押す」or「月末になる」と勤務表(CSVファイル)のダウンロードリンクがメールで送られてきます。</p>
        </div>
    )
}

export default PunchContent
