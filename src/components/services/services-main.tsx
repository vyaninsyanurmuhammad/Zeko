import React from "react";
import ServicesMainLayout from "./services-main-layout";

const ServicesMain = () => {
  return (
    <>
      <div className="flex flex-col w-full h-fit pt-12 lg:pt-24">
        <div className="w-full flex flex-col gap-8 px-12 lg:px-24">
          <span className="text-2xl text-start font-medium text-slate-blue-900">
            Our Services
          </span>
          <span className="h-px flex bg-slate-blue-300 rounded-full"></span>
        </div>
        <ServicesMainLayout
          title="Research ⟶ Unveiling User Needs"
          description="In today’s rapidly changing landscape, a deep understanding of customer needs is pivotal. Our research practices challenge assumptions and shine a light on valuable insights. This data forms a foundation for informed decisions, ensuring solutions resonate deeply with users and genuinely cater to their needs."
          listDescription={[
            "Competitor and Market Analysis",
            "Visual Benchmark",
            "Analytics Audit",
            "Usability and Accessibility Review",
            "Stakeholders Interviews and Workshops",
            "User Interviews and Surveys",
            "Research Synthesis",
          ]}
          className="hover:bg-violet-100"
        />
        <ServicesMainLayout
          title="Branding ⟶ Crafting Narratives"
          description="Brands shape perceptions, create connections, spark emotions, and move worlds. More than logos, they embody the heart and soul of your company. We help evolve brand identities, be it a new brand, guiding its evolution, or giving it a visual uplift. Our approach ensures your brand remains authentic, speaks to the heart, and aligns with both your audience and those you hope to inspire."
          listDescription={[
            "Naming",
            "Brand Strategy",
            "Communication Strategy",
            "Copywriting",
            "Visual Identity",
            "Marketing Materials",
            "Brand Motion System",
            "Brand Guidelines",
          ]}
          className="hover:bg-amber-100"
        />
        <ServicesMainLayout
          title="User Experience ⟶ Simplifying Interactions"
          description="In an increasingly complex world, easing user interactions becomes essential. We design intuitive journeys, flows, and narratives that transform everyday tasks into simpler, more manageable experiences. By prioritizing genuine human needs, we not only enhance satisfaction and loyalty but also ensure your business continues to meet its objectives effectively."
          listDescription={[
            "Customer and User Persona",
            "User Story and Flow",
            "Customer Journey Map",
            "Value Proposition Canvas",
            "Sitemap and Informational Architecture",
            "Content Inventory and UX Writing",
            "Wireframing",
            "User Testing",
          ]}
          className="hover:bg-lime-100"
        />
        <ServicesMainLayout
          title="Interface Design ⟶ Harmonious Experiences"
          description="At its core, interface design is the delicate balance of form and function, a symbiosis of aesthetics and usability. But it’s more than just creating visually appealing layouts; it’s about ensuring that every interaction is meaningful, intuitive, and delightful. Through a considerate process, we craft design languages and holistic systems that not only amplify your brand’s voice but also knit together your brand, website, and product into a singular, harmonious experience."
          listDescription={[
            "Design Language Development",
            "Website Design",
            "Product Design",
            "Interaction and Motion Design",
            "Design Systems and Guidelines",
            "Creative Direction",
            "Prototyping",
          ]}
          className="hover:bg-emerald-100"
        />
        <ServicesMainLayout
          title="Development ⟶ Engineering for Growth"
          description="In the digital world, development is about more than functionality; it’s about embedding your brand experience into every digital touchpoint while ensuring adaptability and accessibility. We create scalable platforms with intuitive interfaces, optimal performance, and high standards of accessibility. More than a website or product, we deliver an easy-to-manage environment that empowers your team, fuels your growth, and seamlessly incorporates your brand experience."
          listDescription={[
            "Front-end Development",
            "Back-end Development",
            "CMS Implementation",
            "Quality Assurance",
            "Accessibility",
            "Interaction and Motion",
          ]}
          className="hover:bg-red-100"
        />
      </div>
    </>
  );
};

export default ServicesMain;
