import { Link } from "react-router-dom";
import { ReactComponent as Hero } from "../assets/hero-frame.svg";
import { useGetStageQuery } from "../services/stage";

const Landing = () => {
  const { data } = useGetStageQuery();
  const {
    slug: slugName,
    stage_name: stageName,
    stage_children,
  } = data?.[0] || {};
  const { slug: subSlugName, stage_name: subStageName } =
    stage_children?.[0] || {};

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row-reverse items-center px-10">
        <Hero className="w-full" />
        <div className="w-full">
          <h1 className="text-2xl md:text-5xl text-secondary font-bold">
            TALENT SCORE
          </h1>
          <h2 className="text-xl md:text-4xl text-primary font-normal">
            SÜNİ İNTELLEKT SİSTEMİ
          </h2>
          <p className="py-6 text-sm md:text-base">
            Bu sistem sizin təhsil və karyera həyatınızdakı imtahan, olimpiyada,
            sertifikasiya və ya iş nailiyyətləriniz əsasında sizin talent
            skorunuzu hesablayır. Bu formu doldurduqdan sonra öz yaşıdlarınız
            arasında ən yaxşı hansı faizlikdə olduğunuzu müəyyən edə
            biləcəksiniz.
          </p>

          <Link
            to={`/stages/${slugName}/${subSlugName}`}
            state={{ subStageName, stageName }}
            className="bg-qss-primary px-12 py-3 rounded text-xs sm:text-base font-medium text-white"
          >
            Testə Başla
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
