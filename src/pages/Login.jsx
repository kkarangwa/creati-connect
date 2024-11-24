import background from "../assets/background.png"
export default function LoginPage() {
    return (
        <div className="flex justify-between p-20 items-center h-screen bg-cover bg-black bg-transparent bg-center" style={{ backgroundImage: `url(${background})` }}>
            <h1 className="text-white text-5xl font-bold">Cc  CreatiConnect</h1>
            <div className="w-full max-w-md p-8 bg-white w-2/3">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <form>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" placeholder="john@doe.com" className="mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="********" className="mt-1 p-2 border border-gray-300 rounded-md" />
                    </div>
                </form>
            </div>
        </div>
    )
}