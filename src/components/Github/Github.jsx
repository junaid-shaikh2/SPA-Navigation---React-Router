import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    if (!data || data.message) {
        return <div className="text-center m-4 text-red-500 text-xl">Failed to load GitHub data</div>;
    }

    return (
        <>
            <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
                Github followers: {data.followers}
            </div>
            {data.avatar_url && (
                <div className="flex justify-center">
                    <img src={data.avatar_url} alt="GitHub Avatar" className="w-40 rounded-full" />
                </div>
            )}
        </>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/junaid-shaikh2');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub user data');
    }
    return response.json();
};
