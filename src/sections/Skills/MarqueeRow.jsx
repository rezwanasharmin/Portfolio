const MarqueeRow = ({ items }) => {
    return (
        <div className="relative overflow-hidden">
            <div className="marquee gap-5">
                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="w-[220px] shrink-0
                       rounded-2xl p-5
                       bg-slate-800/40 border border-white/10
                       flex flex-col items-center gap-3"
                    >
                        <img
                            src={item.icon}
                            alt={item.name}
                            className="h-12 w-12 object-contain"
                        />
                        <span className="text-sm text-slate-200">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeRow