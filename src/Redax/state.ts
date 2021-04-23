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
    posts: Array<PostType>


}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>

}

export type  SidebarType = {}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogPageType
    sidebar:SidebarType

}
export let state:RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 2},
            {id: 2, message: 'It,s my first post', likesCount: 26},
        ],


    },
    dialogsPage: {
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
}




export const addPost = (postMessage:string) => {
    const newPost : PostType = {
        id: new Date().getTime(),
        message: postMessage,
        likesCount: 0,

    }

    state.profilePage.posts.push(newPost)
}
