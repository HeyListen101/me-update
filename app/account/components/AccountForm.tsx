"use client"
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import Avatar from "./Avatar"

export default function AccountForm({ user }: { user: User | null }) {
    const supabase = createClient()
    const [loading, setLoading] = useState(true)
    const [fullname, setFullname] = useState<string | null>(null)
    const [username, setUsername] = useState<string | null>(null)
    const [website, setWebsite] = useState<string | null>(null)
    const [avatar_url, setAvatarUrl] = useState<string | null>(null)

    const getProfile = useCallback(async () => {
        try {
            setLoading(true)
            
            const { data, error, status } = await supabase
            .from('profiles')
            .select(`full_name, username, website, avatar_url`)
            .eq('id', user?.id)
            .single()

            if (error && status !== 406) {
                console.log(error)
                throw error
            }

            if (data) {
                setFullname(data.full_name)
                setUsername(data.username)
                setWebsite(data.website)
                setAvatarUrl(data.avatar_url)
            }
        } catch (error) {
            alert('Error loading user data!')
        } finally {
            setLoading(false)
        }
    }, [user, supabase])

    useEffect(() => {
        getProfile()
    }, [user, getProfile])

    async function updateProfile({
        username,
        website,
        avatar_url,
    }: {
        username: string | null
        fullname: string | null
        website: string | null
        avatar_url: string | null
    }) {
        try {
            setLoading(true)

            const { error } = await supabase.from('profiles').upsert({
                id: user?.id as string,
                full_name: fullname,
                username,
                website,
                avatar_url,
                updated_at: new Date().toISOString(),
            })
            if (error) 
                throw error
            alert('Profile updated!')
        } catch (error) {
            alert('Error updating the data!')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="form-widget flex flex-auto flex-col gap-[50px] items-center">
            <Avatar
                uid={user?.id ?? null}
                url={avatar_url}
                size={200}
                onUpload={(url) => {
                    setAvatarUrl(url)
                    updateProfile({ fullname, username, website, avatar_url: url })
                }}
            />
            <div className="flex flex-col gap-[30px] w-fit">
                <div className="flex">
                    <label htmlFor="email" className="w-[125px] text-[16px] font-semibold">Email</label>
                    <input id="email" type="text" value={user?.email} className="w-[250px] text-[16px] font-light" disabled />
                </div>
                <div className="flex">
                    <label htmlFor="fullName" className="w-[125px] text-[16px] font-semibold">Full Name</label>
                    <input
                        id="fullName"
                        type="text"
                        value={fullname || ''}
                        onChange={(e) => setFullname(e.target.value)}
                        placeholder="Enter your full name"
                        className="w-[250px] text-[16px] font-light"
                    />
                </div>
                <div className="flex">
                    <label htmlFor="username" className="w-[125px] text-[16px] font-semibold">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username || ''}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-[250px] text-[16px] font-light"
                    />
                    </div>
                <div className="flex">
                    <label htmlFor="website" className="w-[125px] text-[16px] font-semibold">Website</label>
                    <input
                        id="website"
                        type="url"
                        value={website || ''}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Enter your website link"
                        className="w-[250px] text-[16px] font-light"
                    />
                </div>
            </div>
            <div className="flex gap-[25px] justify-center">
                <div>
                    <button
                        className="cursor-pointer shadow-md button primary block w-fit bg-[#5B5B5B] text-white text-[14px] rounded-[5px] font-medium text-center px-[20px] py-[5px]"
                        onClick={() => updateProfile({ fullname, username, website, avatar_url })}
                        disabled={loading}
                    >
                        {loading ? 'Loading ...' : 'Update'}
                    </button>
                </div>
                <div>
                    <form action="/auth/signout" method="post">
                        <button className="cursor-pointer shadow-md button block w-fit text-[#5B5B5B] text-[14px] rounded-[5px] font-medium text-center px-[20px] py-[5px]" type="submit">
                            Sign Out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}