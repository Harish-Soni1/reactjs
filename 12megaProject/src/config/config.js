const config = {
    appwriteURL: String(import.meta.env.VITE_APPRITE_URL),
    projectId: String(import.meta.env.VITE_APPRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPRITE_DATABSE_ID),
    collectionId: String(import.meta.env.VITE_APPRITE_COLLECTION_ID),
    bucketId: String(import.meta.env.VITE_APPRITE_BUKCET_ID),
}

export default config;