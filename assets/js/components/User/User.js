import React, {Component} from 'react';
import './User.scss';
import {connect} from "react-redux";
import {votes} from '../../thunks/getVotesThunk';
import {unVote} from '../../thunks/unVoteThunk';
import Loader from '../Loader/Loader';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/es/Paper/Paper";
import Button from "@material-ui/core/Button";
import {createMuiTheme, MuiThemeProvider,} from '@material-ui/core/styles';



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#EA7925',
        },
        secondary: {
            main: '#0044ff',
        },
    },
});



class User extends Component {
    constructor() {
        super();

        this.state = {
            opened: false,
            searchValue: ''
        }
    }


    componentDidMount() {
    this.props.onGetVotes()
  }

    onSearchBarChange = e => this.setState({searchValue: e.target.value})


    render() {
    const {votes} = this.props.votes;
    const {onUnVote} = this.props;

      const loader = <div className="Loader-container">
          <Loader color={'#EA7925'} h={100}/>
      </div>

    const votesArray = votes.map(vote => {
      return (
          <MuiThemeProvider theme={theme}>
              <Grid className={'main'} >
                  <Paper className={'Card'}  key={vote.id} >
                      <div className={'Card-title'}>{vote.title}</div>
                      <div className={'Card-MoneySpend'} >Voted Amount: {vote.amount}€</div>
                      <Button
                          color="primary"
                          variant="outlined"
                          onClick={() => onUnVote(vote.id)}>UnVote</Button>
                  </Paper>
              </Grid>
          </MuiThemeProvider>
      )
    })
      return (
              <div className='User'>
                  {votes.length > 0 ? votesArray : loader}
              </div>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    votes: state.votes
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetVotes: () => dispatch(votes()),
  onUnVote: (id) => dispatch(unVote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);