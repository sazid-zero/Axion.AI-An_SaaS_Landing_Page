const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export default GlassCard;