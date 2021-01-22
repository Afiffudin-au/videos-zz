import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './CommentCard.scss'
function CommentCard({displayName,profileImageUrl,textDisplay,textOriginal}) {
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
