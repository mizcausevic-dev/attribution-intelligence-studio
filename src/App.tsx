import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import {
  channelContribution,
  executiveSignals,
  experimentLift,
  journeyStages,
  storyPanels,
  workflowAlerts
} from "./data";

const tones = {
  positive: "signal-card positive",
  watch: "signal-card watch",
  neutral: "signal-card neutral"
} as const;

const liftColors = ["#fb7185", "#f59e0b", "#38bdf8", "#8b5cf6"];

function App() {
  return (
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Attribution Intelligence Studio</p>
          <h1>Executive-grade attribution that translates channel complexity into investment decisions.</h1>
          <p className="hero-text">
            A frontend flagship for growth operators who need clearer attribution, sharper experiment
            interpretation, and a more credible board-level revenue narrative.
          </p>
          <div className="hero-chips">
            <span>Revenue systems</span>
            <span>Experiment decisioning</span>
            <span>Attribution governance</span>
          </div>
        </div>
        <div className="hero-diagram" aria-label="Attribution flow diagram">
          <div className="diagram-column">
            <span className="column-label">Sources</span>
            <div>Organic</div>
            <div>Paid</div>
            <div>Partner</div>
            <div>Lifecycle</div>
          </div>
          <div className="diagram-connector">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="diagram-column strong">
            <span className="column-label">Decision Layer</span>
            <div>Model comparison</div>
            <div>Lift confidence</div>
            <div>Pipeline narrative</div>
          </div>
          <div className="diagram-connector right">
            <span />
            <span />
            <span />
          </div>
          <div className="diagram-column">
            <span className="column-label">Actions</span>
            <div>Budget shifts</div>
            <div>Partner tuning</div>
            <div>Board updates</div>
          </div>
        </div>
      </header>

      <section className="signal-grid" aria-label="Executive metrics">
        {executiveSignals.map((signal) => (
          <article key={signal.label} className={tones[signal.tone]}>
            <p>{signal.label}</p>
            <strong>{signal.value}</strong>
            <span>{signal.delta}</span>
          </article>
        ))}
      </section>

      <section className="content-grid primary-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Channel quality</p>
              <h2>Revenue influence by sourced vs assisted contribution</h2>
            </div>
            <span className="panel-note">USD millions · efficiency index overlay</span>
          </div>
          <div className="chart-frame">
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={channelContribution}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                <XAxis dataKey="channel" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis yAxisId="left" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: "18px"
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="sourced" stackId="a" fill="#7c3aed" radius={[8, 8, 0, 0]} />
                <Bar yAxisId="left" dataKey="influenced" stackId="a" fill="#22d3ee" radius={[8, 8, 0, 0]} />
                <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#f97316" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel table-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Workflow alerts</p>
              <h2>Signals that should change how leadership reads the quarter</h2>
            </div>
          </div>
          <div className="alert-list">
            {workflowAlerts.map((alert) => (
              <div key={alert.title} className="alert-card">
                <div className="alert-header">
                  <strong>{alert.title}</strong>
                  <span>{alert.severity}</span>
                </div>
                <p>{alert.detail}</p>
                <small>Owner: {alert.owner}</small>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="content-grid secondary-grid">
        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Model comparison</p>
              <h2>Where attribution stories change across the journey</h2>
            </div>
          </div>
          <div className="chart-frame compact">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={journeyStages}>
                <defs>
                  <linearGradient id="firstTouch" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#fb7185" stopOpacity={0.65} />
                    <stop offset="95%" stopColor="#fb7185" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="wShaped" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.65} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
                <XAxis dataKey="stage" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: "18px"
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="firstTouch" stroke="#fb7185" fill="url(#firstTouch)" strokeWidth={3} />
                <Area type="monotone" dataKey="wShaped" stroke="#38bdf8" fill="url(#wShaped)" strokeWidth={3} />
                <Line type="monotone" dataKey="pipelineShare" stroke="#f59e0b" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </article>

        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Experiment outcomes</p>
              <h2>Rollout decisions backed by lift confidence</h2>
            </div>
          </div>
          <div className="chart-frame compact">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={experimentLift} layout="vertical" margin={{ left: 12, right: 24 }}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" tickLine={false} axisLine={false} />
                <YAxis
                  type="category"
                  dataKey="experiment"
                  width={120}
                  stroke="#94a3b8"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: "#111827",
                    border: "1px solid rgba(148,163,184,0.16)",
                    borderRadius: "18px"
                  }}
                />
                <Bar dataKey="lift" radius={[0, 12, 12, 0]}>
                  {experimentLift.map((entry, index) => (
                    <Cell key={entry.experiment} fill={liftColors[index % liftColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="decision-strip">
            {experimentLift.map((item) => (
              <div key={item.experiment} className="decision-card">
                <strong>{item.experiment}</strong>
                <span>{item.confidence}% confidence</span>
                <p>{item.decision}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="story-grid" aria-label="Narrative explanation">
        {storyPanels.map((panel) => (
          <article key={panel.heading} className="story-card">
            <h3>{panel.heading}</h3>
            <p>{panel.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App;
