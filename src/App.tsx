import {
  Area,
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
    <main className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Attribution Intelligence Studio</p>
          <h1>See which channels earn the next growth dollar.</h1>
          <p className="hero-text">
            Explore how channel contribution, attribution models, and experiments can support clearer
            growth decisions.
          </p>
          <p className="demo-notice" role="note">
            <strong>Illustrative portfolio demo.</strong> All figures, alerts, and
            recommendations are synthetic. No live customer data is used.
          </p>
          <div className="hero-chips">
            <span>Revenue systems</span>
            <span>Experiment decisioning</span>
            <span>Attribution governance</span>
          </div>
          <div className="hero-actions">
            <a href="https://github.com/mizcausevic-dev/attribution-intelligence-studio">View source</a>
            <a href="https://www.linkedin.com/in/mirzacausevic">Contact Miz</a>
          </div>
        </div>
        <div className="hero-diagram" role="img" aria-label="Sources feed a decision layer, which informs budget, partner, and board actions">
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
            <div>Experiment readout</div>
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
              <h2>Sourced and assisted pipeline by channel</h2>
            </div>
            <span className="panel-note">Synthetic USD millions · exclusive source and assist categories · efficiency index 0–100</span>
          </div>
          <div className="chart-frame" aria-hidden="true">
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
                <Bar yAxisId="left" dataKey="sourced" name="Sourced ($M)" stackId="a" fill="#7c3aed" radius={[8, 8, 0, 0]} isAnimationActive={false} />
                <Bar yAxisId="left" dataKey="assisted" name="Assisted ($M)" stackId="a" fill="#22d3ee" radius={[8, 8, 0, 0]} isAnimationActive={false} />
                <Line yAxisId="right" type="monotone" dataKey="efficiency" name="Efficiency index" stroke="#f97316" strokeWidth={3} isAnimationActive={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <details className="data-details">
            <summary>View channel data</summary>
            <div className="table-scroll">
              <table>
                <caption>Synthetic channel contribution. Sourced and assisted pipeline are exclusive categories.</caption>
                <thead><tr><th scope="col">Channel</th><th scope="col">Sourced ($M)</th><th scope="col">Assisted ($M)</th><th scope="col">Efficiency index</th></tr></thead>
                <tbody>{channelContribution.map((item) => (
                  <tr key={item.channel}><th scope="row">{item.channel}</th><td>{item.sourced}</td><td>{item.assisted}</td><td>{item.efficiency}</td></tr>
                ))}</tbody>
              </table>
            </div>
          </details>
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
          <div className="chart-frame compact" aria-hidden="true">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={journeyStages}>
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
                <Area type="monotone" dataKey="firstTouch" name="First touch (%)" stroke="#fb7185" fill="url(#firstTouch)" strokeWidth={3} isAnimationActive={false} />
                <Area type="monotone" dataKey="wShaped" name="W-shaped (%)" stroke="#38bdf8" fill="url(#wShaped)" strokeWidth={3} isAnimationActive={false} />
                <Line type="monotone" dataKey="pipelineShare" name="Pipeline share (%)" stroke="#f59e0b" strokeWidth={3} isAnimationActive={false} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
          <details className="data-details">
            <summary>View model comparison data</summary>
            <div className="table-scroll">
              <table>
                <caption>Synthetic share by journey stage and attribution view, in percent.</caption>
                <thead><tr><th scope="col">Stage</th><th scope="col">First touch</th><th scope="col">W-shaped</th><th scope="col">Pipeline share</th></tr></thead>
                <tbody>{journeyStages.map((item) => (
                  <tr key={item.stage}><th scope="row">{item.stage}</th><td>{item.firstTouch}%</td><td>{item.wShaped}%</td><td>{item.pipelineShare}%</td></tr>
                ))}</tbody>
              </table>
            </div>
          </details>
        </article>

        <article className="panel chart-panel">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Experiment outcomes</p>
              <h2>Illustrative lift and possible next steps</h2>
            </div>
          </div>
          <div className="chart-frame compact" aria-hidden="true">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={experimentLift} layout="vertical" margin={{ left: 12, right: 24 }}>
                <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" horizontal={false} />
                <XAxis type="number" unit="%" stroke="#94a3b8" tickLine={false} axisLine={false} />
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
                <Bar dataKey="lift" name="Lift (%)" radius={[0, 12, 12, 0]} isAnimationActive={false}>
                  {experimentLift.map((entry, index) => (
                    <Cell key={entry.experiment} fill={liftColors[index % liftColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <details className="data-details">
            <summary>View experiment data and decisions</summary>
            <div className="table-scroll">
              <table>
                <caption>Synthetic experiment lift and possible actions. No sample size or statistical analysis is provided.</caption>
                <thead><tr><th scope="col">Experiment</th><th scope="col">Region</th><th scope="col">Lift</th><th scope="col">Possible action</th></tr></thead>
                <tbody>{experimentLift.map((item) => (
                  <tr key={item.experiment}><th scope="row">{item.experiment}</th><td>{item.region}</td><td>{item.lift}%</td><td>{item.decision}</td></tr>
                ))}</tbody>
              </table>
            </div>
          </details>
          <div className="decision-strip">
            {experimentLift.map((item) => (
              <div key={item.experiment} className="decision-card">
                <strong>{item.experiment}</strong>
                <span>{item.lift}% sample lift</span>
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
    </main>
  );
}

export default App;
