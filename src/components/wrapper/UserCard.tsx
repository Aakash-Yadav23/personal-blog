import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface UserCardProps {
  name: string
  email: string

}


const UserCard: React.FC<UserCardProps> = ({ name, email }) => {


  return (
    <Card className={`max-w-[350px] absolute top-[70px] right-8 `}>
      <CardHeader>
        <CardTitle>User Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <h1>{name}</h1>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <h1>{email}</h1>
            </div>
          </div>
        </form>
      </CardContent>

    </Card>
  )
}



export default UserCard;