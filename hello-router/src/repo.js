import React from 'react'
function Repo({params}) {
    return (<div>用户名：{params.username} , 仓库名：{params.reponame}</div>)
}
export default Repo
