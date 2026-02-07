// server component by default
// fetch data inside a server component
// access backend resources directly 
// keep sensitive information in the server side not to be exposed on the client side

// Limitations
// can't use hooks -> not possible
// add any event

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <h1 className="text-lg font-bold">Hello Next JS!</h1>
    </div>
  );
}
