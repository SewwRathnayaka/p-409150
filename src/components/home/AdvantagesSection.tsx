import React from "react";

interface AdvantageItemProps {
  iconUrl: string;
  text: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ iconUrl, text }) => {
  return (
    <div className="flex items-center">
      <img
        src={iconUrl}
        className="w-[27px] h-[27px] rounded-[50%]"
        alt="Advantage icon"
      />
      <div className="text-base text-black uppercase ml-5">{text}</div>
    </div>
  );
};

const AdvantagesSection: React.FC = () => {
  const advantages = [
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/568d059a51878fc49dd8eba75b5659df48501a64?placeholderIfAbsent=true", text: "Highly Professional Staff" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/62b68f7fd0d46c77bcf9273f3f54f6c41c3bb27f?placeholderIfAbsent=true", text: "Quality Control System" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/91466dcf108cf2b4d3581139d7492d61f5e2d3cc?placeholderIfAbsent=true", text: "Timely Delivery" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5af84a0b6e465b0309c4672ec705a89eaaf88004?placeholderIfAbsent=true", text: "Accourate Testing Process" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c238128cc10bb3d409bc929e90c283c56c7fdaff?placeholderIfAbsent=true", text: "100% Satisfaction Guarantee" },
  ];

  return (
    <section className="relative w-full h-[664px] flex items-center justify-center">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacdceb9529423b60d11e766f432f8d84186ec58?placeholderIfAbsent=true"
        className="absolute w-full h-[664px] object-cover"
        alt="Advantages Background"
      />
      <div className="absolute w-full h-[664px]" />
      <div>
        <svg
          width="952"
          height="456"
          viewBox="0 0 952 456"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[952px] h-[456px]"
          style={{ fill: "rgba(56,56,56,0.55)", opacity: 0.5 }}
        >
          <path
            opacity="0.5"
            d="M0 25C0 11.1929 11.1929 0 25 0H927C940.807 0 952 11.1929 952 25V431C952 444.807 940.807 456 927 456H25C11.1929 456 0 444.807 0 431V25Z"
            fill="#383838"
            fillOpacity="0.55"
          ></path>
        </svg>
      </div>
      <div className="absolute text-4xl text-[#FFFDFD] left-[757px] top-[155px]">
        Why choose us
      </div>
      <div className="absolute w-[992px] flex flex-col gap-5 left-[757px] top-[270px]">
        {advantages.map((advantage, index) => (
          <AdvantageItem
            key={index}
            iconUrl={advantage.iconUrl}
            text={advantage.text}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
