import React from 'react';
import axios from 'axios'
import { AuthContext } from '../../hooks/contexts/AuthContext'
import Post from './Post/Post'
import classes from './Posts.module.css'
import * as profileTypes from '../../hooks/componentTypes'
class Posts extends React.Component {
    static contextType = AuthContext
    state = {
        posts: [],
        errorMessage: ''
    }
    componentDidMount() {
        let value = this.context;
        if (this.props.type === profileTypes.USER_PROFILE) {
            this.setState({ posts: this.props.posts })
        } else {
            axios.get(`/posts/${value.state.userId}`)
                .then((res) => {
                    if (res.status === 200) {
                        console.log(res.data)
                        this.setState({ posts: res.data })
                    }
                    else {
                        this.setState({ errorMessage: 'unable to load your posts' })
                    }

                })
                .catch((err) => {
                    this.setState({ errorMessage: `Check Your Internet Connection Or Try Later ${err}` })
                })
        }

    }
    render() {

        let checkPost = <p>No Posts Yet</p>
        let fetchedPosts = this.state.posts.map((post) => {
            return <Post url={post} />
        })
        return (
            <>
                {this.state.posts.length === 0 ? checkPost : null}
                {this.state.errorMessage}
                <div className={classes.Posts}>
                    {fetchedPosts}
                </div>
            </>
        );
    }
}

export default Posts