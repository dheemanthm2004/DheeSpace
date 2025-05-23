// import { ArrowLeftCircle } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="flex items-center gap-3 p-1 animate-pulse text-gray-800">
//       {/* Left Arrow Icon */}
//       <ArrowLeftCircle className="w-10 h-10 text-gray-600" />

//       {/* Text */}
//       <h1 className="text-lg font-semibold">
//         Get started with creating a <span className="underline">New Document</span>
//       </h1>
//     </main>
//   );
// }
'use client'
import { ArrowRight } from "lucide-react";
import NewDocumentButton from '@/components/NewDocumentButton';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-200 px-4">
      <div className="text-center space-y-6 max-w-xl">
        {/* Pretty pastel “logo” */}
        <div className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-400 text-transparent bg-clip-text drop-shadow-sm tracking-wider">
          DheeSpace
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl font-semibold text-gray-900 tracking-tight leading-tight drop-shadow-sm">
          Your space to think, write & vibe together.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
          Real-time docs. Live cursors. AI that actually listens.  
          Just ✍️, we got the rest.
        </p>

        {/* Cute feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600 pt-2 px-4">
  {[
    "📝 Create docs solo or with friends",
    "🤝 Invite & collaborate in real-time",
    "🧠 Chat with your doc",
    "🌍 Translate & summarize on the fly"
  ].map((text, idx) => (
    <div
      key={idx}
      className="bg-white/70 backdrop-blur-md py-2 px-3 rounded-lg shadow-sm transition transform duration-200 hover:shadow-md hover:-translate-y-1 hover:bg-white/80"
    >
      {text}
    </div>
  ))}
</div>


        {/* Call to action */}
        <div className="inline-flex items-center gap-2 pt-6">
          <NewDocumentButton />
          <ArrowRight className="w-5 h-5 text-black" />
        </div>
      </div>
    </main>
  );
}


