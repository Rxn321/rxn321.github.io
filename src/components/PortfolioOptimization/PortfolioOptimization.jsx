import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getTheme } from "../../styles/theme"

export default function PortfolioOptimization({ darkMode }) {
  const theme = getTheme(darkMode)

  const colors = {
    glow: darkMode
      ? {
          border: "border-orange-300/40",
          shadow: "shadow-orange-300/20",
          bar: "bg-orange-300/50",
          dot: "bg-orange-300",
          text: "text-orange-300",
          accent: "orange-300",
        }
      : {
          border: "border-blue-400/40",
          shadow: "shadow-blue-400/20",
          bar: "bg-blue-400/50",
          dot: "bg-blue-400",
          text: "text-blue-500",
          accent: "blue-400",
        },
  }

  const [tickers, setTickers] = useState("AAPL, TSLA, MSFT, NVDA")
  const [startDate, setStartDate] = useState("2023-01-01")
  const [endDate, setEndDate] = useState("2025-05-11")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")

  const analyze = async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("https://portfolio-optimization-3ujx.onrender.com/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tickers: tickers.split(",").map((t) => t.trim().toUpperCase()),
          start_date: startDate,
          end_date: endDate,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.detail || "Analysis failed")
        return
      }

      setResult(data)
      setActiveTab("overview")
    } catch (err) {
      setError("Could not connect to server — try again shortly")
    } finally {
      setLoading(false)
    }
  }

  const inputClass = `
    w-full px-4 py-2 rounded-xl text-sm
    border backdrop-blur-md outline-none
    transition-all duration-300
    ${theme.card.bg} ${theme.card.border} ${theme.text.main}
    focus:${colors.glow.border}
  `

  const tabs = ["overview", "sharpe", "var", "weights"]

  return (
    <section
      id="portfolio-optimization"
      className={`max-w-6xl mx-auto px-6 pt-48 md:pt-80 space-y-10 ${theme.text.main}`}
    >
      <h2 className="text-3xl font-semibold text-center">Portfolio Optimizer</h2>
      <p className={`text-center text-sm ${theme.text.muted}`}>
        Enter stock tickers to analyze risk, return, and optimal allocations
      </p>

      {/* ── Input Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`
          rounded-2xl border backdrop-blur-md p-6 space-y-4
          ${theme.card.bg} ${colors.glow.border} ${colors.glow.shadow}
          shadow-lg
        `}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1">
            <label className={`text-xs ${theme.text.muted}`}>Tickers (comma separated)</label>
            <input
              type="text"
              value={tickers}
              onChange={(e) => setTickers(e.target.value)}
              placeholder="AAPL, TSLA, MSFT"
              className={inputClass}
            />
          </div>
          <div className="space-y-1">
            <label className={`text-xs ${theme.text.muted}`}>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className={inputClass}
            />
          </div>
          <div className="space-y-1">
            <label className={`text-xs ${theme.text.muted}`}>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <button
          onClick={analyze}
          disabled={loading}
          className={`
            w-full py-3 rounded-xl text-sm font-medium
            border transition-all duration-300
            ${loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.01] active:scale-[0.99]"}
            ${colors.glow.border} ${colors.glow.text}
            ${theme.card.bg}
          `}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⟳</span> Analyzing... (may take 30s on first load)
            </span>
          ) : (
            "Analyze Portfolio →"
          )}
        </button>

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}
      </motion.div>

      {/* ── Results ── */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Tabs */}
            <div className="flex gap-2 flex-wrap justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-4 py-1.5 rounded-full text-xs border transition-all duration-300
                    ${activeTab === tab
                      ? `${colors.glow.border} ${colors.glow.text}`
                      : `${theme.card.border} ${theme.text.muted}`
                    }
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* ── Overview Tab ── */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {/* Portfolio Stats */}
                <div className={`rounded-2xl border backdrop-blur-md p-5 space-y-3 ${theme.card.bg} ${colors.glow.border}`}>
                  <h3 className={`text-sm font-semibold ${colors.glow.text}`}>Portfolio</h3>
                  <div className="space-y-2">
                    <StatRow label="Sharpe Ratio" value={result.portfolio_sharpe?.toFixed(3)} />
                    <StatRow label="Daily Return" value={`${(result.portfolio_return * 100)?.toFixed(3)}%`} />
                    <StatRow label="Volatility" value={`${(result.portfolio_volatility * 100)?.toFixed(3)}%`} />
                  </div>
                  <div className={`mt-3 h-1 w-16 rounded-full ${colors.glow.bar}`} />
                </div>

                {/* Avg Returns */}
                <div className={`rounded-2xl border backdrop-blur-md p-5 space-y-3 ${theme.card.bg} ${theme.card.border}`}>
                  <h3 className={`text-sm font-semibold ${theme.text.muted}`}>Avg Daily Returns</h3>
                  <div className="space-y-2">
                    {Object.entries(result.avg_returns).map(([stock, val]) => (
                      <StatRow key={stock} label={stock} value={`${(val * 100).toFixed(3)}%`} />
                    ))}
                  </div>
                </div>

                {/* Volatility */}
                <div className={`rounded-2xl border backdrop-blur-md p-5 space-y-3 ${theme.card.bg} ${theme.card.border}`}>
                  <h3 className={`text-sm font-semibold ${theme.text.muted}`}>Volatility (Risk)</h3>
                  <div className="space-y-2">
                    {Object.entries(result.volatility).map(([stock, val]) => (
                      <StatRow key={stock} label={stock} value={`${(val * 100).toFixed(3)}%`} />
                    ))}
                  </div>
                </div>

                {/* Drop Probability */}
                {result.distribution && (
                  <div className={`rounded-2xl border backdrop-blur-md p-5 space-y-3 col-span-full ${theme.card.bg} ${theme.card.border}`}>
                    <h3 className={`text-sm font-semibold ${theme.text.muted}`}>Probability of dropping below -2% in a day</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {Object.entries(result.distribution).map(([stock, data]) => (
                        <div key={stock} className={`rounded-xl border p-3 text-center ${theme.card.border}`}>
                          <p className={`text-xs ${theme.text.muted}`}>{stock}</p>
                          <p className={`text-lg font-semibold ${data.prob_below_threshold > 10 ? "text-red-400" : colors.glow.text}`}>
                            {data.prob_below_threshold}%
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Sharpe Tab ── */}
            {activeTab === "sharpe" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`rounded-2xl border backdrop-blur-md p-6 space-y-4 ${theme.card.bg} ${colors.glow.border}`}
              >
                <h3 className={`text-sm font-semibold ${colors.glow.text}`}>Sharpe Ratios</h3>
                <div className="space-y-3">
                  {Object.entries(result.sharpe_ratios).map(([stock, val]) => (
                    <div key={stock} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{stock}</span>
                        <span className={colors.glow.text}>{val.toFixed(3)}</span>
                      </div>
                      <div className={`h-1.5 rounded-full w-full ${darkMode ? "bg-white/10" : "bg-black/10"}`}>
                        <div
                          className={`h-1.5 rounded-full ${colors.glow.bar}`}
                          style={{ width: `${Math.min(Math.max(val * 200, 5), 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className={`mt-4 pt-4 border-t ${theme.card.border}`}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Portfolio (Equal Weights)</span>
                      <span className={`font-semibold ${colors.glow.text}`}>{result.portfolio_sharpe?.toFixed(3)}</span>
                    </div>
                  </div>
                </div>
                <p className={`text-xs ${theme.text.muted}`}>
                  Above 1.0 = good · 0–1.0 = okay · Below 0 = poor risk-adjusted return
                </p>
              </motion.div>
            )}

            {/* ── VaR Tab ── */}
            {activeTab === "var" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`rounded-2xl border backdrop-blur-md p-6 ${theme.card.bg} ${colors.glow.border}`}
              >
                <h3 className={`text-sm font-semibold mb-4 ${colors.glow.text}`}>Value at Risk (95% Confidence)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className={theme.text.muted}>
                        <th className="text-left pb-3">Stock</th>
                        <th className="text-right pb-3">Historical VaR</th>
                        <th className="text-right pb-3">Parametric VaR</th>
                        <th className="text-right pb-3">Expected Shortfall</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      {result.var_table?.["Historical VaR (95%)"] &&
                        Object.keys(result.var_table["Historical VaR (95%)"]).map((stock) => (
                          <tr key={stock} className={`border-t ${theme.card.border}`}>
                            <td className={`py-2 font-medium ${stock === "Portfolio" ? colors.glow.text : ""}`}>{stock}</td>
                            <td className="text-right py-2 text-red-400">
                              {(result.var_table["Historical VaR (95%)"][stock] * 100).toFixed(2)}%
                            </td>
                            <td className="text-right py-2 text-red-400">
                              {(result.var_table["Parametric VaR (95%)"][stock] * 100).toFixed(2)}%
                            </td>
                            <td className="text-right py-2 text-red-500">
                              {(result.var_table["Expected Shortfall"][stock] * 100).toFixed(2)}%
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <p className={`text-xs mt-4 ${theme.text.muted}`}>
                  VaR = max expected daily loss · Expected Shortfall = avg loss on worst days
                </p>
              </motion.div>
            )}

            {/* ── Weights Tab ── */}
            {activeTab === "weights" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className={`rounded-2xl border backdrop-blur-md p-6 space-y-3 ${theme.card.bg} ${colors.glow.border}`}>
                  <h3 className={`text-sm font-semibold ${colors.glow.text}`}>Optimal Weights (Monte Carlo)</h3>
                  <p className={`text-xs ${theme.text.muted}`}>Best Sharpe across 10,000 simulations</p>
                  <div className="space-y-2">
                    {Object.entries(result.optimal_weights_mc).map(([stock, weight]) => (
                      <div key={stock} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{stock}</span>
                          <span className={colors.glow.text}>{weight}</span>
                        </div>
                        <div className={`h-1.5 rounded-full w-full ${darkMode ? "bg-white/10" : "bg-black/10"}`}>
                          <div
                            className={`h-1.5 rounded-full ${colors.glow.bar}`}
                            style={{ width: weight }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-2xl border backdrop-blur-md p-6 space-y-3 ${theme.card.bg} ${theme.card.border}`}>
                  <h3 className={`text-sm font-semibold ${theme.text.muted}`}>Optimal Weights (Scipy)</h3>
                  <p className={`text-xs ${theme.text.muted}`}>Mathematically exact optimization</p>
                  <div className="space-y-2">
                    {Object.entries(result.optimal_weights_scipy).map(([stock, weight]) => (
                      <div key={stock} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>{stock}</span>
                          <span>{weight}</span>
                        </div>
                        <div className={`h-1.5 rounded-full w-full ${darkMode ? "bg-white/10" : "bg-black/10"}`}>
                          <div
                            className={`h-1.5 rounded-full ${darkMode ? "bg-white/30" : "bg-black/20"}`}
                            style={{ width: weight }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function StatRow({ label, value }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="opacity-60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
