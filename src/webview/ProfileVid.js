import React, { useEffect, useState } from 'react';
import { storage } from '../util/Firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const ProfileVid = () => {
    const [videoURL, setVideoURL] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [isVideoLoading, setIsVideoLoading] = useState(true);
    const [isImageLoading, setIsImageLoading] = useState(true);

    useEffect(() => {
        const fetchVideoURL = async () => {
            try {
                const videoRef = ref(storage, "gs://umarsalman-portfolio.appspot.com/info/RPReplay_Final1721674650.mp4");
                const url = await getDownloadURL(videoRef);
                setVideoURL(url);
                setIsVideoLoading(false);
            } catch (error) {
                console.error("Error getting video URL:", error);
                setIsVideoLoading(false);
            }
        };

        const fetchImageURL = async () => {
            try {
                const imgRef = ref(storage, "gs://umarsalman-portfolio.appspot.com/info/img1.png");
                const url = await getDownloadURL(imgRef);
                setImageURL(url);
                setIsImageLoading(false);
            } catch (error) {
                console.error("Error getting image URL:", error);
                setIsImageLoading(false);
            }
        };

        fetchVideoURL();
        fetchImageURL();

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='w-32 h-32 rounded-2xl shadow-xl bg-[#3e3e42] z-10 flex items-center justify-center'>
            {isDesktop ? (
                isVideoLoading ? (
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-200 border-t-transparent"></div>
                ) : (
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-32 h-32 shadow-xl rounded-lg"
                    >
                        <source src={videoURL} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            ) : (
                isImageLoading ? (
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-200 border-t-transparent"></div>
                ) : (
                    <img
                        src={imageURL}
                        alt="Profile"
                        className="w-32 h-32 shadow-xl rounded-lg"
                    />
                )
            )}
        </div>
    );
};

export default ProfileVid;
