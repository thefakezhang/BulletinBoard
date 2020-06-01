import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
});

  // componentDidMount = (props) => {
  //   console.log(this.props.request);
  // };

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="placeholder.jpg"
          title="Thumbnails"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Example Request ID#
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A description of the request
          </Typography>
          <Typography>
            Translator:
            Proofreader:
            Subber:
            Editor:
            Thumbnailer:
            QA:
          </Typography>
          <Chip label="Requesting Translator" component="a" href="#chip" clickable/>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Source Video
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
