
import React from "react";

interface AdvantageItemProps {
  iconUrl: string;
  text: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({ iconUrl, text }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={iconUrl}
        className="w-6 h-6 rounded-full"
        alt="Advantage icon"
      />
      <div className="text-sm text-white font-medium ml-3">{text}</div>
    </div>
  );
};

const AdvantagesSection: React.FC = () => {
  const advantages = [
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/568d059a51878fc49dd8eba75b5659df48501a64?placeholderIfAbsent=true", text: "Highly Professional Staff" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/62b68f7fd0d46c77bcf9273f3f54f6c41c3bb27f?placeholderIfAbsent=true", text: "Quality Control System" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/91466dcf108cf2b4d3581139d7492d61f5e2d3cc?placeholderIfAbsent=true", text: "Timely Delivery" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5af84a0b6e465b0309c4672ec705a89eaaf88004?placeholderIfAbsent=true", text: "Accurate Testing Process" },
    { iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c238128cc10bb3d409bc929e90c283c56c7fdaff?placeholderIfAbsent=true", text: "100% Satisfaction Guarantee" },
  ];

  return (
    <section className="relative py-16 bg-cover bg-center flex items-center overflow-hidden">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacdceb9529423b60d11e766f432f8d84186ec58?placeholderIfAbsent=true"
        className="absolute w-full h-full object-cover inset-0"
        alt="Advantages Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 lg:w-3/5">
          {/* This space intentionally left empty to create balance */}
        </div>
        <div className="md:w-1/2 lg:w-2/5 bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
            Why choose us
          </h2>
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <AdvantageItem
                key={index}
                iconUrl={advantage.iconUrl}
                text={advantage.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
