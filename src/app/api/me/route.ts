import { getUserDetailsFromSession } from "@/lib/getUser";
import { NextRequest, NextResponse } from "next/server";
import { UserById } from "../lib/getUserFromId";
import { User } from "@/types/User";


const GET = async (req: NextRequest) => {
    try {

        const session = await getUserDetailsFromSession(req);
        if (!session) {
            return NextResponse.json({
                message: "Not Authenticated"
            }, {
                status: 403,
                statusText: 'Forbidden'
            });
        }
        const userDetails = await UserById(session) as User;

        const { password, ...user } = userDetails;

        return user;

    } catch (error) {

        console.error(error);
        return NextResponse.json({
            message: "Something went wrong"
        }, {
            status: 403,
            statusText: 'Forbidden'
        });
    }




}