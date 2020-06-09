s(function () {
    console.log('posts.js is loaded ...')
    listenForClick()
    listenForNewPostFormClick()
});

function listenForCLick() {
    s('button#posts-data').on('click', function (event) {
        event.preventDefault()
        getPosts()
    })
}

function getPosts() {
    s.ajax({
        url: 'http://localhost:3000/posts',
        method: 'get'
        dataType 'json'
    }).done(function (data) {

        console.log("the data is: ", data)
        let mypost = new Post(data[0])
        let myPostHTML = mypost.postHTML()
        $('div#ajax-posts').html(myPostHTML)
        document.getElementById('ajax-posts').innerHTML += myPostHTML
    })
    }

    function listenForNewPostFormClick() {
        $('button#ajax-new-post').on('click', function (event) {
            event.preventDefault()
        let newPostForm = Post.newPostForm()
        document.querySelector('div#new-post-form-div')
        $('div#new-post-form-div')
        })
    }    

    class Post {
        constructor(obj) {
            this.id = obj.id
            this.title = obj.title 
            this.content = obj.content
            this.comments = obj.comments
        }
    }

    static newPostForm = function () {
        return (` 
        <strong>New post comment form</strong>
        <form>
        <input id='post-title' type='text'  name='title'></input><br>
        <input type='submit' />
        </form>
        `)
    }
}
 
Post.prototype.postHTML = function () {
    let postComments = this.comments.map(comment =>{
    return(`
        <p>${comment.content}</p>
    `)
    }).join('')

        return(`
    <div>
    <h3>${this.title}</h3>
    <p>${this.content}</p>
    <p>${postComments}</p>
    </div>
    `)
}

