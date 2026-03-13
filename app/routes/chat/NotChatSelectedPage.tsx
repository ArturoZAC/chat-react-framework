import { MessageSquare } from "lucide-react";

const NotChatSelectedPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          color: "#888",
        }}
      >
        <MessageSquare
          size={64}
          color="#bbb"
          strokeWidth={2}
          style={{ background: "#f5f5f5", borderRadius: "50%", padding: 8 }}
        />
        <h2 style={{ marginTop: 24, fontWeight: 400 }}>No hay ningún chat seleccionado</h2>
        <p style={{ marginTop: 8, fontSize: 16 }}>Selecciona un chat para comenzar a conversar.</p>
      </div>
    </>
  );
};

export default NotChatSelectedPage;
