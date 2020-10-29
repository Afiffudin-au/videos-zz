import React from 'react'
import Moment from 'react-moment';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStylesAccordionCustom } from '../../useStyles/useStyles'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import IconButton from '@material-ui/core/IconButton';
import './PlayingVideoChild.scss';
import CommentSection from '../CommentSection/CommentSection';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { UseNumberWithComma } from '../../useNumberWithComma/UseNumerWithComma';
function PlayingVideoChild({ item }) {
  const classes = useStylesAccordionCustom()
  return (
    <div className="videoPlayingChild">
      <div className="videoPlayingChild__videoBox" dangerouslySetInnerHTML={{ __html: item.player.embedHtml }} />
      <div className="videoPlayingChild__details">
        <div className="content">
          <div className="flex items-center" style={{marginBottom : '5px'}}>
            <LiveTvIcon style={{fontSize : '35px',marginRight : '5px'}}/>
            <h1>{item.snippet.channelTitle}</h1>
          </div>
          <h2>{item.snippet.title}</h2>
          <h3>{UseNumberWithComma(item.statistics.viewCount)} View ,<Moment fromNow ago>{item.snippet.publishedAt}</Moment> ago</h3>
          <div className={classes.root}>
            <Accordion className={classes.background}>
              <AccordionSummary
                className={classes.color}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>See Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <pre className="descriptions" dangerouslySetInnerHTML={{ __html: item.snippet.localized.description}} />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="statistic flex items-center">
          <div className="like flex items-center">
            <IconButton style={{outline : '0'}}>
              <ThumbUpAltIcon style={{color : 'rgb(204, 204, 204)'}}/>
            </IconButton>
            <span className="font-semibold">{UseNumberWithComma(item.statistics.likeCount)}</span>
          </div>
          <div className="like flex items-center">
            <IconButton style={{outline : '0'}}>
              <ThumbDownIcon style={{color : 'rgb(204, 204, 204)'}}/>
            </IconButton>
            <span className="font-semibold">{UseNumberWithComma(item.statistics.dislikeCount)}</span>
          </div>
          <div className="like flex items-center">
            <IconButton style={{outline : '0'}}>
              <CommentIcon style={{color : 'rgb(204, 204, 204)'}}/>
            </IconButton>
            <span className="font-semibold">{UseNumberWithComma(item.statistics.commentCount)}</span>
          </div>
        </div>
      </div>
      <CommentSection videoId={item.id}/>
    </div>
  )
}

export default PlayingVideoChild
