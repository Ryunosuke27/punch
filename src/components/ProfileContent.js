import React from 'react'

const ProfileContent = () => {
    return (
        <div className = "profileContent">
            <h1 className="title">開発者プロフィール</h1>
            <p　className="contents">私は24歳でエンジニア歴は2年です。</p>
            <br/>
            <p className="contents">主にバックエンドでAPIの実装業務を経験してきました。</p>
            <br/>
            <p className="contents">現在はフルスタックエンジニアになるため、日々業務と勉強に励んでいます。</p>

            <h1 className="title">Punchを作るにあたって</h1>
            <p　className="contents">現在の現場で毎日、稼働時間を記録する面倒さを解決したい思いから、このアプリを作りました。</p>
            <br/>
            <p className="contents">まだまだ改善の余地はありますが、いずれは現場の方々に使って頂けるようにするつもりです。</p>
        </div>
    )
}

export default ProfileContent
