import React from 'react';
import {Link} from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render(){
        // need: 
        // 1. index of the post
        const {postId} = this.props.params; //destructures out from this.props.params.postId
        
        const i = this.props.posts.findIndex((post) => post.code === postId);
        
        // console.log(i);
        // 2. get us the post
        const post = this.props.posts[i];
        //if no comments the push an empty array in
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props}/>
                <Comments postComments={postComments} {...this.props}/>
            </div>
        )
    }
});

export default Single;
