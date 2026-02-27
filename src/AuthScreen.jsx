import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { C, STARTING_BAL, ELECTION_DATE, GLOBAL_CSS } from "./constants";

export default function AuthScreen() {
  const [mode,     setMode]     = useState("login");
  const [username, setUsername] = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);

  const submit = async () => {
    setError(""); setLoading(true);

    // Validate username
    const u = username.trim().toLowerCase();
    if (!u || u.length < 3)            { setError("Username must be at least 3 characters"); setLoading(false); return; }
    if (!/^[a-z0-9_]+$/.test(u))       { setError("Username: only letters, numbers, underscores"); setLoading(false); return; }
    if (!email.includes("@"))          { setError("Enter a valid email address"); setLoading(false); return; }
    if (password.length < 6)           { setError("Password must be at least 6 characters"); setLoading(false); return; }

    try {
      if (mode === "register") {
        // Check username not already taken
        const snap = await getDoc(doc(db, "usernames", u));
        if (snap.exists()) { setError("Username already taken — try another"); setLoading(false); return; }

        // Create Firebase Auth account
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: u });

        // Save user profile to Firestore
        await setDoc(doc(db, "users", cred.user.uid), {
          username:  u,
          email,
          balance:   STARTING_BAL,
          portfolio: {},
          trades:    [],
          joined:    new Date().toISOString(),
        });

        // Reserve username
        await setDoc(doc(db, "usernames", u), { uid: cred.user.uid });

      } else {
        // Login: look up uid from username
        const snap = await getDoc(doc(db, "usernames", u));
        if (!snap.exists()) { setError("Username not found — register first"); setLoading(false); return; }
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (e) {
      const msg = e.code === "auth/email-already-in-use" ? "Email already registered — sign in instead"
                : e.code === "auth/wrong-password"       ? "Wrong password"
                : e.code === "auth/user-not-found"       ? "No account with that email"
                : e.code === "auth/too-many-requests"    ? "Too many attempts — try again later"
                : e.message;
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:C.bg, padding:"2rem" }}>
      <style>{GLOBAL_CSS}</style>

      <div className="slideup" style={{ width:"100%", maxWidth:420 }}>
        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:"2.5rem" }}>
          <div style={{ width:60, height:60, borderRadius:14, background:`linear-gradient(135deg, ${C.green2}, #1a7a3c)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, fontWeight:700, color:"#fff", margin:"0 auto 1rem", boxShadow:`0 8px 32px rgba(46,160,67,.3)` }}>C</div>
          <div style={{ fontSize:22, fontWeight:600, letterSpacing:"-.04em", marginBottom:6 }}>CUMSA Markets</div>
          <div style={{ fontSize:11, color:C.muted, letterSpacing:".06em" }}>MALAYSIA &amp; SINGAPORE · CAMBRIDGE · 2026–27</div>
        </div>

        {/* Card */}
        <div style={{ background:C.surface, border:`1px solid ${C.border}`, borderRadius:12, padding:"1.75rem", boxShadow:"0 24px 64px rgba(0,0,0,.6)" }}>

          {/* Mode tabs */}
          <div style={{ display:"flex", border:`1px solid ${C.border}`, borderRadius:8, overflow:"hidden", marginBottom:"1.5rem" }}>
            {[["login","SIGN IN"],["register","REGISTER"]].map(([m,label]) => (
              <button key={m} onClick={() => { setMode(m); setError(""); }}
                style={{ flex:1, padding:"9px", background:mode===m ? C.green2 : "transparent", color:mode===m ? "#fff" : C.muted, border:"none", cursor:"pointer", fontSize:12, fontWeight:600, letterSpacing:".06em", transition:"all .15s" }}>
                {label}
              </button>
            ))}
          </div>

          {/* Fields */}
          <Field label="Username"      value={username} onChange={setUsername} placeholder="e.g. nasi_lemak99"  onEnter={submit} />
          <Field label="Email address" value={email}    onChange={setEmail}    placeholder="you@cam.ac.uk"       onEnter={submit} type="email" />
          <Field label="Password"      value={password} onChange={setPassword} placeholder="min. 6 characters"   onEnter={submit} type="password" />

          {mode === "register" && (
            <div style={{ background:"rgba(57,211,83,.07)", border:"1px solid rgba(57,211,83,.2)", borderRadius:6, padding:".6rem .75rem", marginBottom:"1rem", fontSize:11, color:C.green }}>
              🎉 Every new account starts with exactly <strong>1,000 pts</strong> — no exceptions
            </div>
          )}

          {error && (
            <div style={{ background:"rgba(248,81,73,.1)", border:"1px solid rgba(248,81,73,.2)", borderRadius:6, padding:".6rem .75rem", marginBottom:"1rem", fontSize:11, color:C.red }}>
              {error}
            </div>
          )}

          <button onClick={submit} disabled={loading}
            style={{ width:"100%", padding:"11px", background:loading ? C.s3 : C.green2, color:loading ? C.muted : "#fff", border:"none", borderRadius:8, fontSize:13, fontWeight:600, cursor:loading?"not-allowed":"pointer", letterSpacing:".04em", transition:"all .15s", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
            {loading ? <><span className="spin" />Loading…</> : (mode==="login" ? "Sign In →" : "Create Account →")}
          </button>

          <div style={{ marginTop:"1rem", fontSize:10, color:C.muted2, textAlign:"center", lineHeight:1.7 }}>
            Election: <strong style={{color:C.amber}}>{ELECTION_DATE}</strong>
            {" · "}Market closes: <strong style={{color:C.amber}}>7 Mar 2026</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type="text", placeholder, onEnter }) {
  return (
    <div style={{ marginBottom:"1rem" }}>
      <div style={{ fontSize:9, letterSpacing:".14em", textTransform:"uppercase", color:C.muted, marginBottom:5 }}>{label}</div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key==="Enter" && onEnter()}
        style={{ width:"100%", background:C.s2, border:`1px solid ${C.border}`, borderRadius:6, padding:".65rem .85rem", color:C.text, fontSize:14, fontWeight:500, outline:"none", transition:"border-color .15s" }}
      />
    </div>
  );
}
