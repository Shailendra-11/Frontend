import React from 'react'

const MemoReact = React.memo(() => {
     console.log("Memo Components")
     return (
          <div>
               <h1>React Memo</h1>
          </div>
     )

})

export default MemoReact