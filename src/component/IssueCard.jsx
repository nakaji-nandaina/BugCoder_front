import React from 'react';
import { Card,CardActions,CardContent,CardMedia,CardHeader,Avatar,IconButton,Typography,Button, } from '@mui/material';
import { NavLink } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
const IssueCard = ({title,language,date,username,id}) => {
  const iconname=username[0];
  const issuelink="/issue/"+String(id);
  return (
    <Card sx={12}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#555" }} aria-label="recipe">
            {iconname}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title={username}
        subheader={date}
      />
      <CardContent>
        <NavLink to={issuelink} style={{textDecoration:"None"}} >
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {title}
          </Typography>
        </NavLink>
        <Typography variant="body2" color="text.secondary" padding={"5px"} width={"fit-content"} style={{backgroundColor:"#eee"}}>
          {language}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default IssueCard;