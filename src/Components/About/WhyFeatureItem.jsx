// WhyFeatureItem.jsx
const WhyFeatureItem = ({ icon, title, description }) => (
  <li className="rounded-xl px-5 py-3 bg-white text-text flex flex-row-reverse gap-x-4 shadow-md">
    {icon}
    <div className="flex flex-col justify-center pt-6">
      <h5 className="text-5xl m-0 text-end">{title}</h5>
      <p dir="rtl" className="text-2xl text-start">
        {description}
      </p>
    </div>
  </li>
);

export default WhyFeatureItem;
