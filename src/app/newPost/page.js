

export default function page() {

    return (
        <main className="flex flex-col items-center pt-4">
            <h1>Create a new post</h1>
            <form className="flex flex-col gap-4 mt-4">
                <div className="flex gap-4">
                    <label htmlFor="bio">Profile Bio</label>
                    <input type="text" name="bio" id="bio" className="border-zinc-300 border-2 rounded"/>
                </div>
                <div className="flex gap-4">
                    <label htmlFor="location">Location</label>
                    <input type="text" name="location" id="location" className="border-zinc-300 border-2 rounded"/>
                </div>
                <button type="submit">Update</button>
                
            </form>
        </main>
    )
}