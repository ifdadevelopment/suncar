import Image from "next/image";

const ExecutiveCar = () => {
    return (
        <section id="executive" className="bg-gray-50 py-12 md:py-20">

            <div className="max-w-7xl mx-auto px-4">

                <p className="global-color font-semibold mb-3">About Chauffeur Car Melbourne</p>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                    Trusted Chauffeur Hire<br />Melbourne
                </h2>
                <div className="features-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                    <div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="feature-icon text-4xl mb-4">🚘</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Luxury Sedans and SUVs (Lexus ES300, RX450)
                        </h3>
                        <p className="text-sm font-medium text-gray-600">
                            Quiet hybrid ride with leather interior, climate control, and a clean, well-presented vehicle for every booking. Ideal for 1–3 passengers plus luggage.
                        </p>
                    </div>

                    <div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="feature-icon text-4xl mb-4">🛬</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Airport & Corporate Transfers
                        </h3>
                        <p className="text-sm font-medium text-gray-600">
                            Reliable transport for Melbourne Airport, CBD meetings, conferences, and events. Flight tracking and direct communication before pickup.
                        </p>
                    </div>

                    <div className="feature-card bg-white shadow-lg rounded-lg p-6 text-center">
                        <div className="feature-icon text-4xl mb-4">📑</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                            Business-Friendly Invoicing
                        </h3>
                        <p className="text-sm font-medium text-gray-600">
                            Perfect for corporate clients – tax invoices, trip summaries, and recurring bookings available for regular executives and business travellers.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveCar;
