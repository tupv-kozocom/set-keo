import React from 'react';
import GoogleMapComponent from "@/components/Map/GoogleMapComponent";

function PostLocation() {
    return (
        <div className="w-full bg-white p-8 mb-16 rounded-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Địa chỉ</h2>
                <div className="text-[#2F80ED] text-sm">Chỉ đường đi</div>
            </div>
            <div className="text-sm my-4">115 Lê Văn Sỹ, Phường Hải Hưng, Quận Phú Nhuận, Phú Quốc</div>
            <div className="h-[140px]">
                <GoogleMapComponent/>
            </div>
        </div>
    );
}

export default PostLocation;