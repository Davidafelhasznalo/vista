const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3">
            <div className="container-fluid">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-4 pb-4">
                    <div className="text-md-end">
                        <div className="display-4 fw-bolder text-lime">VISTA</div>
                        <p className="small text-white-50">A flottád. Egy helyen.</p>
                    </div>
                </div>

                <div className="border-top border-light border-opacity-25 pt-3 d-flex flex-column flex-md-row justify-content-between gap-2 small text-white-50">
                    <span>© 2026 VISTA: Kányai Márk, Sveiczer Dávid</span>
                </div>

            </div>
        </footer>
    )
}

export default Footer