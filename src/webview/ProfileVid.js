import React, { useEffect, useState } from 'react'
import { storage } from '../util/Firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const ProfileVid = () => {
    const [videoURL, setVideoURL] = useState("");

    useEffect(() => {
        const fetchVideoURL = async () => {
            try {
                const videoRef = ref(storage, "gs://umarsalman-portfolio.appspot.com/info/RPReplay_Final1721674650.mp4");
                const url = await getDownloadURL(videoRef);
                setVideoURL(url);
            } catch (error) {
                console.error("Error getting video URL:", error);
            }
        };

        fetchVideoURL();
    }, []);
    console.log(videoURL);
    return (
        <div className='w-32 h-32 rounded-2xl shadow-xl bg-[#3e3e42] z-10'>
            {videoURL ? (
                <video
                    autoPlay
                    loop
                    muted
                    className="w-32 h-32 shadow-xl rounded-lg"
                >
                    <source src={videoURL} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    )
}

export default ProfileVid