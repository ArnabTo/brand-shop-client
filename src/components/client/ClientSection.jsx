import { CountUp } from "use-count-up";
const ClientSection = () => {
    return (
        <div className="max-w-6xl m-auto bg-primary rounded-md my-8 p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-8">
                <div><h1 className="text-3xl font-extrabold text-white">Trusted By Over 20000+ Customers</h1><br />
                    <hp className="text-2xl font-semibold text-white">With 7000+ Home Deleveries</hp>
                </div>
                <div className="grid grid-cols-3">
                    <span><p className="mx-6 text-6xl items-center text-white"><CountUp isCounting end={25} duration={4} /></p>
                        <span className="text-white">Distributors</span>
                    </span>
                    <span>
                        <p className="mx-6 text-6xl items-center text-white"><CountUp isCounting end={5} duration={4} />+</p>
                        <span className="text-white"> Years of experience</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ClientSection;