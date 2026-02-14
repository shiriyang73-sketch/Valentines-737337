const Index = () => {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #ffe4e6, #ffd6e0, #ffb3c6)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Georgia, serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <div style={{ fontSize: "60px", marginBottom: "20px" }}>💕</div>
      <h1 style={{ fontSize: "2.5rem", color: "#8b1a4a", marginBottom: "16px" }}>
        Happy Valentine's Day!
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#c2185b", maxWidth: "400px" }}>
        You make every day more beautiful. 🌹
      </p>
      <div style={{ fontSize: "40px", marginTop: "30px" }}>🌸💖🌸</div>
    </div>
  );
};

export default Index;
