export default function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-gray-200 py-12">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <a href="#" className="text-2xl font-bold text-white">
                        Logo
                    </a>

                    <div className="flex flex-col items-center md:items-end text-gray-400 text-center md:text-right">
                        <p>Телефон: <a href="tel:+380XXXXXXXXX" className="hover:text-white">+38 (0XX) XXX-XX-XX</a></p>
                        <p>Email: <a href="mailto:example@email.com" className="hover:text-white">example@email.com</a></p>
                    </div>
                </div>

            </footer>

        </>
    );
}