import React, {Component} from 'react';
import './User.scss';
import {connect} from "react-redux";
import {votes} from '../../thunks/getVotesThunk';
import {unVote} from '../../thunks/unVoteThunk';
import Loader from '../Loader/Loader';

class User extends Component {
  componentDidMount() {
    this.props.onGetVotes()
  }

  render() {
    const {votes} = this.props.votes;
    const {onUnVote} = this.props;
    const loader = <div className="Loader-container">
      <Loader color={'#EA7925'} h={100}/>
    </div>
    const votesArray = votes.map(vote => {
      return (
          <div className='Vote' key={vote.id}>
            <p>Voted Hobby: {vote.title}</p>
            <p>Voted Amount: {vote.amount}€</p>
            <button onClick={() => onUnVote(vote.id)}>UnVote</button>
          </div>
      )
    })
    return (
        <div className='User'>
          My Votes
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