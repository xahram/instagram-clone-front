import React from 'react'
import UserInfo from '../Profile/ProfileInfo/ProfileInfo'
import UserProfilePic from '../Profile/ProfilePic/ProfilePic'
import Posts from '../../containers/Posts/Posts'
import axios from 'axios'
import * as profileTypes from '../../hooks/componentTypes'
export default class UserProfile extends React.Component {
    state = {
        username: '',
        userId: '',
        userProfilePic: '',
        noOfPosts: '',
        bio: '',
        posts: []
    }
    componentDidMount() {
        //here send the request to fill the above 
        // states and pass them down to below components
        axios.get('/otherUser/id')
            .then((res) => {
                this.setState({ ...this.state, userId: res.data._id })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (<div>
            <UserProfilePic
                avatar={this.state.userProfilePic}
                type={profileTypes.USER_PROFILE} />
            <UserInfo
                username={this.state.username}
                bio={this.state.bio}
                postCount={this.state.noOfPosts}
                type={profileTypes.USER_PROFILE} />
            <Posts
                posts={this.state.posts}
                type={profileTypes.USER_PROFILE} />
        </div>)
    }
}