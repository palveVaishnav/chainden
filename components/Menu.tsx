export default function Menu() {
    return (
        <div className="fixed top-0 w-full bg-red-100 p-2 flex justify-between">
            <a className="text-2xl font-bold">ChainDen</a>
            <span className="flex gap-2">
                <a className="border px-4 py-2" href="/auth/signin">Login</a>
                <a className="border px-4 py-2" href="/home">Home </a>
            </span>
        </div>
    )
}