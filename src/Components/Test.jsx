import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

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
        status: "submitted",
        folder_link: "",
        translation_link: "",
        thumbnail_link: "",
        created_at: "2020-06-06T07:34:46",
        updated_at: "2020-06-06T07:34:46"
      },
      {
        id: 3,
        user_id: 1,
        status: "created",
        folder_link: null,
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:50:13",
        updated_at: "2020-06-06T07:50:13"
      },
      {
        id: 5,
        user_id: 2,
        status: "submitted",
        folder_link: null,
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      },
      {
        id: 6,
        user_id: 2,
        status: "submitted",
        folder_link: null,
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      },
      {
        id: 7,
        user_id: 2,
        status: "submitted",
        folder_link: null,
        translation_link: null,
        thumbnail_link: null,
        created_at: "2020-06-06T07:52:03",
        updated_at: "2020-06-06T07:52:03"
      },
      {
        id: 8,
        user_id: 2,
        status: "submitted",
        folder_link: null,
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
