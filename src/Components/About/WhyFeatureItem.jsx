// WhyFeatureItem.jsx
const WhyFeatureItem = ({ icon, title, description }) => (
  <li className="rounded-xl px-4 py-3 bg-white text-text flex flex-row-reverse gap-x-4 shadow-md">
    <div className="shrink-0">{icon}</div>
    <div className="flex flex-col justify-center pt-4">
      <h5 className="text-3xl xl:text-5xl m-0 text-end">{title}</h5>
      <p dir="rtl" className="text-lg xl:text-2xl text-start">
        {description}
      </p>
    </div>
  </li>
);

export default WhyFeatureItem;
