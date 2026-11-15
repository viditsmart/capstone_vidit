'use client'

import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl text-center space-y-6">
        
        {/* Title & Tagline */}
        <div>
          <h1 className="text-3xl font-extrabold text-emerald-400 tracking-tight">Loot Drop Fitness</h1>
          <p className="text-sm text-slate-400 mt-2">
            Turn your real-world workouts, gym sessions, and cycling rides into an RPG progression system.
          </p>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/login"
            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-3 px-4 rounded-lg transition-colors text-center shadow-lg"
          >
            Log In / Sign Up
          </Link>
          <Link
            href="/dashboard"
            className="flex-1 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold py-3 px-4 rounded-lg transition-colors border border-emerald-500/30 text-center"
          >
            Player Dashboard
          </Link>
        </div>

        {/* Quick status footer */}
        <div className="text-xs text-slate-500 pt-4 border-t border-slate-800">
          Status: Next.js App Router & Supabase Connected 🚀
        </div>

      </div>
    </div>
  )
}