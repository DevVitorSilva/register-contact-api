import { connect } from "mongoose";

export async function db(uri: string) {
    try {
        await connect(uri)
        console.log("DataBase on connect.");
        
    } catch (error) {
        console.log("DataBase off connect.");
        console.log(`DataBase Error: ${error}`);
    }
}