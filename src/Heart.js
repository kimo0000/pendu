import React from 'react';

const Heart = ({attempts, maxAttempts}) => {

   const attemptsToHeart = (attempts, maxAttempts) => {
       let heart = []
       for(let i = 1; i <= maxAttempts; i++){
           if(i <= attempts){
               heart.push(0)
           }else {
               heart.push(1)
           }
        }
        return heart
    }


  return (
      <div id='life'>
          {
              attemptsToHeart(attempts, maxAttempts).map((value, index) => {
                    return <span className={value === 1 ? 'full' : 'empty'} 
                                 key={index}>
                                 {value}
                           </span>
              })
          }
      </div>
  )
}

export default Heart;
