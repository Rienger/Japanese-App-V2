import React from 'react'
import content from '../content'
import Table from './Table'

function TableContent(){
    return (
        <div>
        
          
            {content.map((content) => (
            <Table day = {content.day}

                nihongo1 = {content.nihongo1}
                nihongo2 = {content.nihongo2}
                nihongo3 = {content.nihongo3}
                nihongo4 = {content.nihongo4}
                nihongo5 = {content.nihongo5}
                nihongo6 = {content.nihongo6}
                nihongo7 = {content.nihongo7}
                nihongo8 = {content.nihongo8}
                nihongo9 = {content.nihongo9}
                nihongo10 = {content.nihongo10}

                english1 = {content.english1}
                english2 = {content.english2}
                english3 = {content.english3}
                english4 = {content.english4}
                english5 = {content.english5}
                english6 = {content.english6}
                english7 = {content.english7}
                english8 = {content.english8}
                english9 = {content.english9}
                english10 = {content.english10}

                
            />
        ))}
        </div>
        
    )
}



export default TableContent;