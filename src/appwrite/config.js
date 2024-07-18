import conf from "../conf/conf";
import {client,ID, storage,databases, Query} from "appwrite"

export class Servive{


    client = new client();
    databases;
    storage;

    constructor() {
        this.client
        .setEndPoint(conf.appwriteurl)
        .setProjectId(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client)
    }
    async createPost({title,slug,content,featuredImage,status,userId}) {
         try {
           return await this.storage.createDocument(
            conf.appwriteDatabaseId,
            appwriteCollectionId,
            slug,
            {
                title,
                featuredImage,
                status,
                content,
                userId,
            }
           )  
            
         } catch (error) {
                    console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug,{title,status,featuredImage,content,userId}) {
            try {
                return await this.storage.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status
                    }
                )
            } catch (error) {
                console.log("Appwrite service :: updatePost :: error",error);
            }
    }

    async deletePost(slug) {
        try {
            return await this.storage.deleDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.storage.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite services :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]) {
        try {
            return await this.storage.listsDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                    queries
            )
        } catch (error) {
            console.log("Appwrite services :: getPosts :: error",error);
        }
    }

    //file upload methods

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteDatabaseId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
        }
    }

    async deleteFile(fileId) {
        try {
           return await this.storage.deleteFile(
                conf.appwriteDatabaseId,
                fileId
           ) 
           return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }

    async filePreview(fileId) {
        try {
            return await this.storage.getFilePreview(
                conf.appwriteDatabaseId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: filePreview :: error",error);
        }
    }
}

const service = new Servive()

export default service