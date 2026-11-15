'use client'

import { useState } from 'react'
import { supabase } from '@/utils/supabase' // Adjust path if your utils folder is located elsewhere
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const router = useRouter()

  // Handle User Signup
  const handleSignUp = async () => {
    setLoading(true)
    setErrorMsg('')
    setSuccessMsg('')

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      setSuccessMsg('Check your email for the confirmation link!')
    }
    setLoading(false)
  }

  // Handle User Login
  const handleLogin = async () => {
    setLoading(true)
    setErrorMsg('')
    setSuccessMsg('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setErrorMsg(error.message)
    } else {
      // Redirect to your main app dashboard after successful login
      router.push('/dashboard') 
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-2xl">
        <h1 className="text-2xl font-bold text-center mb-2 text-emerald-400">Loot Drop Fitness</h1>
        <p className="text-sm text-slate-400 text-center mb-6">Log workouts. Earn XP. Claim your loot.</p>

        {errorMsg && (
          <div className="bg-red-950/50 border border-red-800 text-red-200 text-sm p-3 rounded-lg mb-4">
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div className="bg-emerald-950/50 border border-emerald-800 text-emerald-200 text-sm p-3 rounded-lg mb-4">
            {successMsg}
          </div>
        )}

        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-100"
              placeholder="player@example.com"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-100"
              placeholder="••••••••"
            />
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2 rounded-lg transition-colors"
            >
              {loading ? 'Loading...' : 'Log In'}
            </button>
            <button
              type="button"
              onClick={handleSignUp}
              disabled={loading}
              className="flex-1 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold py-2 rounded-lg transition-colors border border-emerald-500/30"
            >
              {loading ? 'Loading...' : 'Sign Up'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}