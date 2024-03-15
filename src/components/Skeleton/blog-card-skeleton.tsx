import { Skeleton } from "@/components/ui/skeleton"


const BlogCardSkeleton = () => {

    return <div className="w-full flex flex-col gap-4">

        <div className="flex gap-4">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="flex flex-col gap-4">
                <Skeleton className="h-2 w-20" />
                <Skeleton className="h-2 w-30" />

            </Skeleton>
        </div>

        <div className="flex w-full gap-5">
            <div className="flex flex-col gap-4 w-full">
                <Skeleton className="h-6 w-full " />
                <Skeleton className="h-[150px] md:h-[100px] w-full" />

            </div>
            <div className="image ">
                <Skeleton className="w-[70px] h-[70px] sm:h-[100px] sm:w-[100px]  rounded-sm " />
            </div>
        </div>

        <div className="flex gap-2 items-center">
            <Skeleton className="h-8 w-20 px-4 py-1" />
            <Skeleton className="h-8 w-20 px-4 py-1" />

        </div>

    </div>


}


export default BlogCardSkeleton;