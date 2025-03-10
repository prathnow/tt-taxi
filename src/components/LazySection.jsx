import { useInView } from "react-intersection-observer";

const LazySection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.15, // Widoczność w 20%
    triggerOnce: true, // Obserwacja tylko raz
  });

  return (
    <div
      ref={ref}
      className={`lazy-section ${inView ? "visible" : "hidden"}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
};

export default LazySection;
