const initState = {
    posts: [
        { id: 1, title: 'Laid an egg', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { id: 2, title: 'Fossil was founded', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { id: 3, title: 'Love this nature', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
    ]
}
const rootReducer = (state = initState, action) => {
    if (action.type == 'DELETE_POST') {
        let newPosts = state.posts.filter((post) => {
            return action.title !== post.title
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer