export type MessageType = {
    id: number
    message: string

}

export type DialogType = {
    id: number
    name: string

}

export type PostType = {
    id: number
    message: string
    likesCount: number


}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostType>


}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type  SidebarType = {}

export type RootStateType = {


    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType

}



export type StoreType = {
    _state: RootStateType
    updateNewPostText: (newText: string) =>void
    addPost:(postMessage: string) => void
    _callSubscriber: () => void
    subscribe: (callback: () => void) =>void
    getState: () => RootStateType

}


export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 2},
                {id: 2, message: 'It,s my first post', likesCount: 26},
            ],


        },

        dialogsPage: {
            newMessageText: "",
            dialogs: [
                {id: 1, name: "Diana"},
                {id: 2, name: "Kristina"},
                {id: 3, name: "Mikal"},
                {id: 4, name: "Ilia"},

            ],
            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your it?"},
                {id: 3, message: "Yo."},
                {id: 4, message: "Yo."},

            ]

        },
        sidebar: {}
    },


    _callSubscriber() {
        console.log("Hello")
    },


    updateNewPostText(newText: string) {

        this._state.profilePage.newPostText = newText



        this._callSubscriber()


    },
    addPost(postMessage: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: postMessage,
            likesCount: 0,

        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()

    },
      subscribe(callback){

         this._callSubscriber= callback
    },
    getState(){
        return this._state
    },
}



