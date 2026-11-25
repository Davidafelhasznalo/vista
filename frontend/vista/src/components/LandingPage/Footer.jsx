const Footer = () => {
    return (
        <footer className="bg-forest pb-4 pt-12 text-white">
            <div className="w-full px-6 lg:px-12">
                <div className="flex flex-col justify-between gap-6 pb-6 md:flex-row md:items-end">
                    <div>
                        <div className="text-6xl font-extrabold text-vista-lime">VISTA</div>
                        <p className="text-sm text-white/50">A flottád. Egy helyen.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-between gap-2 border-t border-white/25 pt-4 text-sm text-white/50 md:flex-row">
                    <span>© 2026 VISTA: Kányai Márk, Sveiczer Dávid</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer