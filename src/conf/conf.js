const conf = {
     appwriteurl: String(import.meta.env.VITE_APPWRITE_URL),
     appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
     appwriteStorageId:String(import.meta.env.STORAGE_ID),
     appwriteDatabaseId:String(import.meta.env.VITE_DATABASE_ID),
     appwriteCollectionId:String(import.meta.env.VITE_COLLECTION_ID)
}

export default conf;