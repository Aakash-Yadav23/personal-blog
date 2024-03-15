import { OutputData } from '@editorjs/editorjs';
import { User, UserType } from './User';


type CreatePost = {
    slug: string
    title: string
    body: string
    thumbnail: string | null | undefined
    shortDescription: string
    category: string[]
}


type PostType = {
    id
    slug: string
    title: string
    body: string
    views: number
    author: UserType
    shortDescription: string
    authorId: String
    thumbnail: string
    category: string[]
    comments?: CommentType[]

}

