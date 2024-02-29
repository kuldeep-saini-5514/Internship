import React, { useState } from "react";

const Section = ({ title, description, isVisible, toggleVisibility }) => {
  return (
    <>
      <div className="w-[50%] text-white rounded-xl m-2 ">
        <div
          className="flex justify-between bg-[#0090b0] p-3 rounded-lg cursor-pointer"
          onClick={toggleVisibility}
        >
          <h3 className="font-bold text-base font-normal">{title}</h3>
          <button>
            {isVisible ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x animate-spin-slow"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-right"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            )}
          </button>
        </div>
        {isVisible && (
          <div className=" rounded-xl bg-[#b3f0ff] mt-2 p-3 text-black">
            <p className="text-start">{description}</p>
          </div>
        )}
      </div>
    </>
  );
};

const FAQs = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareers: false,
  });

  const toggleVisibility = (sectionName) => {
    setSectionConfig((prevConfig) => {
      // Check if the section being clicked is already open
      if (prevConfig[sectionName]) {
        // If it's open, close all sections
        return {
          showAbout: false,
          showTeam: false,
          showCareers: false,
        };
      } else {
        // If it's not open, close all sections and then open the clicked one
        return {
          showAbout: sectionName === "showAbout",
          showTeam: sectionName === "showTeam",
          showCareers: sectionName === "showCareers",
        };
      }
    });
  };

  return (
    <>
      <div className="ml-[10%] mt-[5%] flex flex-col gap-3 text-start">
        <h1 className="text-2xl font-semibold">How can we help</h1>
        <p className="text-base font-semibold">FAQ</p>
        <p className="text-base">
          Thinking about Therapy or booking an appointment? Here is what you
          wanna know
        </p>
      </div>
      <div className="h-[100vh] overflow-y-scroll">
              {/* Container-1 */}
        <div className="container-1 mb-8">
          <h1 className="text-2xl ml-[25%] my-4 text-start font-semibold">
            Booking an appointmeant
          </h1>
          <div className="flex flex-col items-center ">
            <Section
              title={
                "What is AroundWithin and how can it help me with my mental health?"
              }
              description={
                "AroundWithin is an organization committed to enhancing mental health through diverse avenues by Offering group therapies, support groups, and individual counseling. Through these comprehensive approaches, AroundWithin endeavours to nurture resilience, foster growth, and uplift spirits in the realm of mental health. To know more click About Us."
              }
              isVisible={sectionConfig.showAbout}
              toggleVisibility={() => toggleVisibility("showAbout")}
            />
            <Section
              title={"Is AroundWithin a substitute for psychiatric treatment/medication?"}
              description={
                "AroundWithin is an online platform for professional therapy/counseling. Please note that your therapist won’t be able to make any official diagnosis, fulfil any court order, or prescribe medicines."
              }
              isVisible={sectionConfig.showTeam}
              toggleVisibility={() => toggleVisibility("showTeam")}
            />
            <Section
              title={"How do I sign up for AroundWithin?"}
              description={
                "To sign up please click here."
              }
              isVisible={sectionConfig.showCareers}
              toggleVisibility={() => toggleVisibility("showCareers")}
            />
          </div>
        </div>
              {/* Container-2 */}
        <div className="container-2 mb-8">
          <div className="flex flex-col items-center ">
            <Section
              title={"Is my personal information and data secure on AroundWithin?"}
              description={
                "The information that you share is protected by data privacy laws, for more information visit our Privacy Policy."
              }
              isVisible={sectionConfig.showAbout}
              toggleVisibility={() => toggleVisibility("showAbout")}
            />
            <Section
              title={"What types of mental health support does AroundWithin offer?"}
              description={
                "We offer support for all kinds of mental health concerns. To know more please click here. You can write to us info@aroundwithin.com. Or you can set up an appointment with one of our therapists directly to gain more insights."
              }
              isVisible={sectionConfig.showTeam}
              toggleVisibility={() => toggleVisibility("showTeam")}
            />
            <Section
              title={"Are the professionals on AroundWithin qualified? How are they verified?"}
              description={
                "The professionals at AroundWithin are hand-picked based on their credentials and good standing in society. During our rigorous process of selection, we do a thorough background check and we ensure that the providers have master's degrees in Psychology and relevant fields.   Providers who are picked will have to provide proper documentation and proof of identity. We then cross-check their credential information with previous organizations they have worked with and a few references. "
              }
              isVisible={sectionConfig.showCareers}
              toggleVisibility={() => toggleVisibility("showCareers")}
            />
          </div>
        </div>
              {/* Container-3 */}
        <div className="container-3 mb-8">
          <div className="flex flex-col items-center ">
            <Section
              title={"How much does AroundWithin cost? Are there free services available?"}
              description={
                "AroundWithin is all about affordable mental health. Our charges depend on the type of services that you avail. For information on this please click here. We are a fee-for-service organization; hence we do not take pro bono cases."
              }
              isVisible={sectionConfig.showAbout}
              toggleVisibility={() => toggleVisibility("showAbout")}
            />
            <Section
              title={"Can I use AroundWithin if I'm experiencing a crisis?"}
              description={
                "No, we are not a crisis helpline. Reach out to the government helplines. How does the matching process work if I'm looking for a mental health professional? We leave that choice to you. Check your preferences and choose the therapists accordingly. You can browse our professionals by clicking here."
              }
              isVisible={sectionConfig.showTeam}
              toggleVisibility={() => toggleVisibility("showTeam")}
            />
            <Section
              title={"What types of communication methods are available on AroundWithin?"}
              description={
                "We provide telephonic and video communication. We will be coming up with messaging services soon!"
              }
              isVisible={sectionConfig.showCareers}
              toggleVisibility={() => toggleVisibility("showCareers")}
            />
          </div>
        </div>
              {/* Container-4 */}
        <div className="container-4 mb-8">
          <div className="flex flex-col items-center ">
            <Section
              title={"What if I'm not satisfied with the support, I receive on AroundWithin?"}
              description={
                "AroundWithin appreciates your timely feedback. You can express your concern directly to the support team or your therapist so that they will make the required adjustments. If you are still not satisfied, you always have the option to choose another counselor/therapist. "
              }
              isVisible={sectionConfig.showAbout}
              toggleVisibility={() => toggleVisibility("showAbout")}
            />
            <Section
              title={"How d I cancel or modify my subscription to AroundWithin?"}
              description={
                "Please go through our cancellation policy. "
              }
              isVisible={sectionConfig.showTeam}
              toggleVisibility={() => toggleVisibility("showTeam")}
            />
            <Section
              title={"Can I use AroundWithin anonymously?"}
              description={
                "When you sign up, we provide you with the option of having a preferred name that will be used to identify you in the system. However, when you start the therapy process, we will ask you for your contact information for emergencies, such as if a therapist believes that you or someone else might be in danger. All of this data is protected by the confidentiality requirements of the therapists' ethical and legal guidelines. "
              }
              isVisible={sectionConfig.showCareers}
              toggleVisibility={() => toggleVisibility("showCareers")}
            />
          </div>
        </div>
              {/* Container-5 */}
        <div className="container-5 mb-8">
          <div className="flex flex-col items-center ">
            <Section
              title={"Is AroundWithin available internationally?"}
              description={
                "AroundWithin is available only in India and for citizens residing in India. Are there any age restrictions for using AroundWithin? People above the age of 18 can sign up with AroundWithin. Children and Adolescents should be accompanied by their parent or guardian. "
              }
              isVisible={sectionConfig.showAbout}
              toggleVisibility={() => toggleVisibility("showAbout")}
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default FAQs;
