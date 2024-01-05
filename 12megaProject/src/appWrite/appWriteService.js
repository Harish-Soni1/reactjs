import config from "../config/config"
import {Client, ID, Databases, Storage, Query} from 'appwrite'


export class Service {

    client = new Client();
    databases;
    bocket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteURL)
            .setProject(config.projectId)
        
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            
            return await this.databases.createDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    userId,
                    featuredImage,
                    status
                }
            )

        } catch (error) {
            console.log("Appwrite Config Service Create Post Error :: ", error);
            return null
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                config.databaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Config Service Update Post Error :: ", error);
            return null
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite Config Service Delete Post Error :: ", error);
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                config.databaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Config Service Create Post Error :: ", error);
            return null
        }
    }

    async getAllPost(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                config.databaseId,
                config.collectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite Config Service Get All Post Error :: ", error);
            return null
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                config.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Config Service Create Post Error :: ", error);
            return null
        }
    }

    getfilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                config.bucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite Config Service Create Post Error :: ", error);
            return null
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                config.bucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite Config Service Create Post Error :: ", error);
            return false
        }
    }

}