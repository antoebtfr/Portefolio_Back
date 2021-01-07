import { Application } from "express";
import express from "./express";
import dotenv from 'dotenv';

export default async (app: Application) => {

    await dotenv.config();
    await express(app);

}