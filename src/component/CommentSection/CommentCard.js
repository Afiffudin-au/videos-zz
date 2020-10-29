import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import './CommentCard.scss'
function CommentCard({displayName,profileImageUrl,textDisplay,textOriginal}) {
  const [viewMore,setViewMore] = useState(false);
  console.log("render comment card")
  return (
    <div className="CommentCard">
      <div className="CommentCard__ProfileName flex items-center">
        <Avatar 
        alt={displayName}
        src={profileImageUrl} />
        <span style={{marginLeft : '5px'}}>{displayName}</span>
      </div>
      <div className="CommentCard__content">
        <p dangerouslySetInnerHTML={{__html :textDisplay}}/>
      </div>
    </div>
  )
}

export default CommentCard
