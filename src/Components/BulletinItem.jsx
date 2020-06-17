import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2
  },
  card: {
    width: 180
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  class App extends Component {
    state = { users: [] };

    componentDidMount() {
      fetch("https://randomuser.me/api/?results=10&nat=us")
        .then(results => results.json())
        .then(data => this.setState({ users: data.results }))
        .catch(err => console.log(err));
    }
  }

  Component.state = {
    users: [
      {
        id: 2,
        user_id: 0,
        status: "created",
        descp: "descp",
        translation_link: "",
        thumbnail_link: "",
        created_at: "2020-06-06T07:34:46",
        updated_at: "2020-06-06T07:34:46"
      },
      {
        id: 3,
        user_id: 1,
        status: "created",
        descp: "descp",
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:50:13",
        updated_at: "2020-06-06T07:50:13"
      },
      {
        id: 5,
        user_id: 2,
        status: "submitted",
        descp: "descp0",
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      },
      {
        id: 6,
        user_id: 2,
        status: "submitted",
        descp: "descp1",
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      },
      {
        id: 7,
        user_id: 2,
        status: "submitted",
        descp: "descp2",
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      },
      {
        id: 8,
        user_id: 2,
        status: "submitted",
        descp: "descp3",
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      }
    ]
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={spacing}>
          {Component.state.users.map((user, index) => (
            <Grid key={index} item>
            <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="placeholder.jpg"
          title="Thumbnails"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Example Request ID# {user.id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A description of the request {user.descp}
          </Typography>
          <Typography>
            Translator: {user.user_id}<br />
            Proofreader: {user.user_id}<br/>
            Subber: {user.user_id}<br />
            Editor: {user.user_id}<br />
            Thumbnailer: {user.user_id}<br/>
            QA:
          </Typography>
          <Chip label={user.status} component="a" href="#chip" clickable/>
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
              <Card key={index} className={classes.card}>
                <CardContent>
                  <Typography>id : {user.id}</Typography>
                  <Typography>User id : {user.user_id}</Typography>
                  <Typography>status : {user.status}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
