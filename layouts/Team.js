import Link from "next/link";
import Cta from "./components/Cta";
import Image from "next/image";

function Team({ data }) {
  const {
    frontmatter: { title, plans,image, call_to_action },
  } = data;
  return (
    <>
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            {plans.map((plan, index) => (
              <div
                className={`col-12 md:col-4 ${
                  !plan.recommended ? "lg:px-0" : "col-recommended"
                }`}
                key={plan.title + index}
              >
                <div className="card text-center">
                  <h4>{plan.title}</h4>
                  <Image
                    className="w-full"
                    src={plan?.image}
                    alt="call to action image"
                    width={225}
                    height={106}
                    />
                  <div className="mt-5">
                    <span className="text-5xl text-dark">{plan.price}</span>
                  </div>
                  <h5 className="mt-2 font-normal text-text">
                    {plan.subtitle}
                  </h5>
                  <ul className="mt-5">
                    {plan.features.map((feature, index) => (
                      <li className="mb-[10px] leading-5" key={index}>
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </>
  );
}

export default Team;
