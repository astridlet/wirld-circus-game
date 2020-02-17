import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://wallpapers.moviemania.io/desktop/movie/163/7d0808/oceans-twelve-desktop-wallpaper.jpg?w=2552&h=1442)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: 'red',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    text: {
      color: 'red',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      backgroundColor: 'red',
    },
  });

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "astridlet@hotmail.fr" ,
            name : "",
            lastname : "",
            password : "",
            passwordbis : "",
            flash : '',
            snackBarIsOpen : false,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
          });
            
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.fetchPostUser();
        this.props.history.push('/');

    }
    
    fetchPostUser = () => {
          fetch(`htttp://localhost:5000/auth/signup`, {
              method:  'POST',
              headers:  {
                      'Content-Type':  'application/json'
              },
              body:  JSON.stringify({...this.state}),
          })
          .then(res  =>  res.json())
          .then(
            this.setState({ snackBarIsOpen : true}),
            res  =>  this.setState({flash:  res.flash}),
            err  =>  this.setState({flash:  err.flash})
        )
    }
  

    render () {

        const { classes } = this.props

        return (
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form onSubmit={this.onSubmit} className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link className={classes.text} href="/signin" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
                </div>
            </Grid>
            </Grid>
        );
    }
}

export default withRouter(withStyles(styles)(SignUp));
