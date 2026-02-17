import Header from "./_components/Header";

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
}
