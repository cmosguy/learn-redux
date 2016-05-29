/*
Actions take a type and data
it will return an object when the action is dispatched

actions get dispatched regarding an action that happened

actions are regular javascript events that get fired off
 */

//increment
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//add comment
export function addComment(postId, author, comment){
    console.log('dispatching add comment');
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
export function removeComment(postId, i){
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}

