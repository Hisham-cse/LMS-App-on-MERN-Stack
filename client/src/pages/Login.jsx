// gMpg0VH4AKYPYn9b
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });
  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };
  const handleRegistration=(type)=>{
    const inputData = type = "signup" ? signupInput:loginInput;
    
    // console.log(signupInput)
    // console.log(loginInput)
    console.log(inputData)

  }
  return (
    <div className="flex items-center w-full justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create a new account and click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={signupInput.name}
                  placeholder="eg: patel"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={signupInput.email}
                  id="email"
                  placeholder="eg: example@gmail.com"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"signup")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password"> password</Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  value={signupInput.password}
                  required="true"
                  placeholder="eg: xyz"
                  onChange={(e)=>changeInputHandler(e,"signup")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("signup")}>Signup</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login with your Username and Password here. After Signup, you'll
                be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={loginInput.email}
                  placeholder="eg: example@gmail.com"
                  required="true"
                  onChange={(e)=>changeInputHandler(e,"login")}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  id="new"
                  name="password"
                  value={loginInput.password}
                  type="password"
                  required="true"
                  placeholder="eg: xyz"
                  onChange={(e)=>changeInputHandler(e,"login")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={()=>handleRegistration("login")}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;
