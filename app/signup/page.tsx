"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("Creating account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Check your email to confirm your account.");
  };

  return (
    <main style={{ maxWidth: 400, margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Create your FlowPocket account</h1>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: 10, width: "100%" }}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: 10, width: "100%" }}
        />

        <br /><br />

        <button type="submit" style={{ padding: 10, width: "100%" }}>
          Sign Up
        </button>
      </form>

      <p>{message}</p>
    </main>
  );
}
