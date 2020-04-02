import React from 'react'
import UserInfo from '../Profile/ProfileInfo/ProfileInfo'
import UserProfilePic from '../Profile/ProfilePic/ProfilePic'
import Posts from '../../containers/Posts/Posts'
import axios from 'axios'
import * as profileTypes from '../../hooks/componentTypes'
export default class UserProfile extends React.Component {
    state = {
        username: '',
        userProfilePic: '',
        noOfPosts: '',
        bio: '',
        posts: []
    }
    componentDidMount() {
        //here send the request to fill the above 
        // states and pass them down to below components
        axios.get('/otherUserProfile/username')
            .then((res) => {
                this.setState({
                    ...this.state,
                    userProfilePic: res.data.avatar,
                    username: res.data.username,
                    bio: res.data.bio,
                    posts: res.data.posts,
                    noOfPosts: res.data.noOfPosts,

                })
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
                noOfPosts={this.state.noOfPosts}
                type={profileTypes.USER_PROFILE} />
            <Posts
                posts={this.state.posts}
                type={profileTypes.USER_PROFILE} />
        </div>)
    }
}