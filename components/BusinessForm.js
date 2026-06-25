"use client";
import { useState } from "react";

export default function BusinessForm() {
  const [idea, setIdea] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generate() {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ idea }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <div>
      <input
        placeholder="Enter business idea (e.g. lawn care)"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        style={{ padding: 10, width: "100%", marginTop: 10 }}
      />

      <button onClick={generate} style={{ marginTop: 10 }}>
        Generate Business
      </button>

      {loading && <p>Generating...</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Business Name</h3>
          <p>{result.name}</p>

          <h3>Tagline</h3>
          <p>{result.tagline}</p>

          <h3>Description</h3>
          <p>{result.description}</p>

          <h3>Services</h3>
          <ul>
            {result.services.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
