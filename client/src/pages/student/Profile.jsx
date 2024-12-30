import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import { Loader2 } from "lucide-react";
import React from "react";
import Course from "./Course";
import { useLoadUserQuery } from "@/features/api/authApi";



const Profile = () => {

    const enrolledCourses = [1];
    const { data, isLoading, error } = useLoadUserQuery();
   
        if(isLoading) return <h1>Profile loading....</h1>
     console.log(data)
    const {user} = data;
   
    return (
        <div className="max-w-4xl max-auto px-4 my-24">
            <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
                <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
                        <AvatarImage src={user.photoUrl || "https://github.com/shadcn.png"} alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div>
                    <div>
                        <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                            Name:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                                {user.name}
                            </span>
                        </h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                            Email:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                            {user.email}
                            </span>
                        </h1>
                    </div>
                    <div>
                        <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                            Role:
                            <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                            {user.role.toUpperCase()}
                            </span>
                        </h1>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button size="sm" className="mt-2">
                                Edit Profile
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click save when you're
                                    done.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        className="col-span-3"
                                    />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="photo" className="text-right">
                                        Profile Photo
                                    </Label>
                                    <Input
                                        id="photo"
                                        type="file"
                                        accept="image/*"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Please Wait
                                        </>
                                    ) : (
                                        "Save changes"
                                    )}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div>
                <h1 className="font-medium txt">Courses you're enrolled in</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
                    {
                        user.enrolledCourses.length === 0 ?
                            <h1> You haven't enrolled yet</h1>
                            : (
                                user.enrolledCourses.map((course, index) => <Course course={course} key={index} />)
                            )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
