import React from 'react'

const Header = (props) => {


    return (
        <div className='df jcsp pad-10 pad-LR40 head-bg stky-h'>
            <div className='df jcsp pad-10'>
                <div className='pad-10 point' onClick={()=>props.updateParent({})}>Home</div>
                <div className='pad-10 point' onClick={()=>props.updateParent({addArticle:true})}>Add Article</div>
            </div>
            <div>
                <div>My New Task Blog</div>
            </div>

        </div>
    )
}

export default Header