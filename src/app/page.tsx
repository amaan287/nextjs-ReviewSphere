export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center w-full max-w-[600px] gap-4">
        <h1 className="text-4xl font-bold text-center">Welcome to Geist UI</h1>
        <p className="text-lg text-center">
          Geist UI is a modern and minimalist design system for React. It is a
          set of React components that are highly customizable and easy to use.
        </p>
      </div>
    </div>
  );
}
