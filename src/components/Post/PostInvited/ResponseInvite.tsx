import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

type ResponseInviteType = 'accepted' | 'rejected' | 'pending'

type ResponseInviteProps = {
    type: ResponseInviteType;
    children?: React.ReactNode;
}

const style: Record<ResponseInviteType, string> = {
    'accepted': 'text-sm',
    'rejected': 'text-sm text-gray-300',
    'pending': 'text-sm text-gray-400'
}

function ResponseInvite({type, children}: ResponseInviteProps) {
    return (
        <div className="flex items-center gap-4 w-full">
            <Avatar className="">
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className={`text-sm ${style[type]}`}>{children}</div>
        </div>
    );
}

export default ResponseInvite;