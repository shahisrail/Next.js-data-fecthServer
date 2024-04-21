"use server"

import connectMongo from "@/dbConnect/connectMongo";
import User from "@/models/User";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {

  const name = formData.get("name");
  const email = formData.get("email");

  console.log(formData.get("name"));
  console.log(formData.get("email"));


  const userData = {
    name,
    email,
  }
  await connectMongo()

  await new User(userData).save()
  revalidatePath('/')
}
export const getUsers = async () => {
  await connectMongo()

  const user = await User.find()
  return user
}