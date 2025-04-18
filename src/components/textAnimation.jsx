import TextPressure from "../../utils/textPressure"

// Note:
// Make sure the font you're using supports all the variable properties. 
// React Bits does not take responsibility for the fonts used

import React from 'react'

const TextAnimation = ({content,height,width}) => {
  return (
<div style={{position: 'relative', height: '200px',width: '70%',margin: ' 20px auto'}}>
  <TextPressure
    text="creative devloper!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#50C878"
    strokeColor="#ff0000"
    minFontSize={36}
  />
</div>
  )
}

export default TextAnimation