'use client'

import { useEffect, useState, FormEvent } from 'react'
import { supabase } from '@/utils/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [workoutType, setWorkoutType] = useState<string>('gym')
  const [statsSummary, setStatsSummary] = useState<string>('')
  const [logStatus, setLogStatus] = useState<string>('')
  const router = useRouter()

  // Check active user session on load
  useEffect(() => {
    async function checkUser() {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error || !session) {
        // If not logged in, redirect back to the login page
        router.push('/')
      } else {
        setUser(session.user)
      }
      setLoading(false)
    }

    checkUser()
  }, [router])

  // Handle logging a workout and earning XP
  const handleLogWorkout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!user) return

    setLogStatus('Saving workout & rolling for loot...')

    const { error } = await supabase.from('workouts').insert([
      {
        user_id: user.id,
        workout_type: workoutType,
        stats_summary: statsSummary,
      },
    ])

    if (error) {
      setLogStatus(`Error logging workout: ${error.message}`)
    } else {
      setLogStatus('Workout logged! +50 XP Earned! 🎉')
      setStatsSummary('')
    }
  }

  // Handle Logout
  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center">
        <p className="text-emerald-400 animate-pulse">Loading player profile...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header / Player Stats Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl gap-4">
          <div>
            <h1 className="text-2xl font-bold text-emerald-400">Player Dashboard</h1>
            <p className="text-sm text-slate-400 font-mono mt-1">{user?.email}</p>
          </div>
          
          <div className="flex items-center gap-6 bg-slate-950 px-4 py-3 rounded-lg border border-slate-800 w-full md:w-auto justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">Level</p>
              <p className="text-lg font-extrabold text-emerald-400">1</p>
            </div>
            <div className="border-r border-slate-800 h-8"></div>
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wider">XP</p>
              <p className="text-lg font-extrabold text-amber-400">0 / 100</p>
            </div>
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-950/50 hover:bg-red-900 text-red-200 text-xs px-3 py-1.5 rounded border border-red-800 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Workout Logger Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-slate-200">Log Today's Training</h2>

          {logStatus && (
            <div className="bg-emerald-950/40 border border-emerald-800 text-emerald-200 text-sm p-3 rounded-lg mb-4">
              {logStatus}
            </div>
          )}

          <form onSubmit={handleLogWorkout} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Workout Type</label>
              <select
                value={workoutType}
                onChange={(e) => setWorkoutType(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-100"
              >
                <option value="gym">Gym / Strength Training</option>
                <option value="bike">Outdoor Bicycling</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Workout Details / Stats</label>
              <input
                type="text"
                value={statsSummary}
                onChange={(e) => setStatsSummary(e.target.value)}
                required
                placeholder="e.g., Squats: 225lbs x 5 reps, 3 sets"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg focus:outline-none focus:border-emerald-500 text-slate-100"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold py-2 rounded-lg transition-colors"
            >
              Submit Workout & Claim Loot
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}